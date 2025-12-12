/**
 * Firestore Helper Functions
 * Common CRUD operations for all collections
 */

import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  Timestamp,
  WhereFilterOp,
  OrderByDirection,
} from 'firebase/firestore';
import { db } from './firebase';
import type { CollectionName } from './firestore-schema';

// ============================================
// CREATE OPERATIONS
// ============================================

export async function createDocument<T extends Record<string, any>>(
  collectionName: CollectionName,
  id: string,
  data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>
): Promise<T> {
  const docRef = doc(db, collectionName, id);
  const timestamp = Timestamp.now();
  
  const documentData = {
    ...data,
    id,
    createdAt: timestamp,
    updatedAt: timestamp,
  } as T;

  await setDoc(docRef, documentData);
  return documentData;
}

export async function createDocumentWithAutoId<T extends Record<string, any>>(
  collectionName: CollectionName,
  data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>
): Promise<T> {
  const collectionRef = collection(db, collectionName);
  const docRef = doc(collectionRef);
  const timestamp = Timestamp.now();
  
  const documentData = {
    ...data,
    id: docRef.id,
    createdAt: timestamp,
    updatedAt: timestamp,
  } as T;

  await setDoc(docRef, documentData);
  return documentData;
}

// ============================================
// READ OPERATIONS
// ============================================

export async function getDocument<T>(
  collectionName: CollectionName,
  id: string
): Promise<T | null> {
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return docSnap.data() as T;
  }
  return null;
}

export async function getAllDocuments<T>(
  collectionName: CollectionName
): Promise<T[]> {
  const collectionRef = collection(db, collectionName);
  const querySnapshot = await getDocs(collectionRef);
  
  return querySnapshot.docs.map(doc => doc.data() as T);
}

export async function queryDocuments<T>(
  collectionName: CollectionName,
  filters: Array<{
    field: string;
    operator: WhereFilterOp;
    value: any;
  }> = [],
  orderByField?: string,
  orderDirection: OrderByDirection = 'asc',
  limitCount?: number
): Promise<T[]> {
  const collectionRef = collection(db, collectionName);
  
  let q = query(collectionRef);
  
  // Apply filters
  filters.forEach(filter => {
    q = query(q, where(filter.field, filter.operator, filter.value));
  });
  
  // Apply ordering
  if (orderByField) {
    q = query(q, orderBy(orderByField, orderDirection));
  }
  
  // Apply limit
  if (limitCount) {
    q = query(q, limit(limitCount));
  }
  
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data() as T);
}

// ============================================
// UPDATE OPERATIONS
// ============================================

export async function updateDocument<T extends Record<string, any>>(
  collectionName: CollectionName,
  id: string,
  data: Partial<Omit<T, 'id' | 'createdAt'>>
): Promise<void> {
  const docRef = doc(db, collectionName, id);
  
  await updateDoc(docRef, {
    ...data,
    updatedAt: Timestamp.now(),
  });
}

export async function upsertDocument<T extends Record<string, any>>(
  collectionName: CollectionName,
  id: string,
  data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>
): Promise<T> {
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    // Update existing document
    await updateDoc(docRef, {
      ...data,
      updatedAt: Timestamp.now(),
    });
    return { ...docSnap.data(), ...data, updatedAt: Timestamp.now() } as T;
  } else {
    // Create new document
    return createDocument<T>(collectionName, id, data);
  }
}

// ============================================
// DELETE OPERATIONS
// ============================================

export async function deleteDocument(
  collectionName: CollectionName,
  id: string
): Promise<void> {
  const docRef = doc(db, collectionName, id);
  await deleteDoc(docRef);
}

// ============================================
// USER-SPECIFIC QUERIES
// ============================================

export async function getUserDocuments<T>(
  collectionName: CollectionName,
  userId: string,
  orderByField?: string,
  orderDirection: OrderByDirection = 'desc',
  limitCount?: number
): Promise<T[]> {
  return queryDocuments<T>(
    collectionName,
    [{ field: 'userId', operator: '==', value: userId }],
    orderByField,
    orderDirection,
    limitCount
  );
}

export async function getLatestUserDocument<T>(
  collectionName: CollectionName,
  userId: string,
  orderByField: string = 'createdAt'
): Promise<T | null> {
  const results = await getUserDocuments<T>(
    collectionName,
    userId,
    orderByField,
    'desc',
    1
  );
  
  return results.length > 0 ? results[0] : null;
}

// ============================================
// BATCH OPERATIONS
// ============================================

export async function batchCreate<T extends Record<string, any>>(
  collectionName: CollectionName,
  documents: Array<Omit<T, 'id' | 'createdAt' | 'updatedAt'>>
): Promise<T[]> {
  const promises = documents.map(data => 
    createDocumentWithAutoId<T>(collectionName, data)
  );
  
  return Promise.all(promises);
}

export async function batchDelete(
  collectionName: CollectionName,
  ids: string[]
): Promise<void> {
  const promises = ids.map(id => deleteDocument(collectionName, id));
  await Promise.all(promises);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

export function timestampToDate(timestamp: Timestamp): Date {
  return timestamp.toDate();
}

export function dateToTimestamp(date: Date): Timestamp {
  return Timestamp.fromDate(date);
}

export function nowTimestamp(): Timestamp {
  return Timestamp.now();
}
