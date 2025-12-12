# Firebase Setup Guide

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name: `edmundmoore-platform`
4. Enable Google Analytics (optional)
5. Click "Create project"

## Step 2: Enable Authentication

1. In Firebase Console, go to **Authentication**
2. Click "Get started"
3. Enable **Email/Password** provider
4. (Optional) Enable **Google** provider
   - Add authorized domains
   - Configure OAuth consent screen

## Step 3: Create Firestore Database

1. In Firebase Console, go to **Firestore Database**
2. Click "Create database"
3. Choose **Start in production mode** (we'll add rules later)
4. Select location (choose closest to your users)
5. Click "Enable"

## Step 4: Set Up Firestore Security Rules

In Firestore Database > Rules tab, paste:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Helper functions
    function isAuthenticated() {
      return request.auth != null;
    }
    
    function isOwner(userId) {
      return isAuthenticated() && request.auth.uid == userId;
    }
    
    // Users collection
    match /users/{userId} {
      allow read: if isAuthenticated();
      allow write: if isOwner(userId);
    }
    
    // Accounts collection (NextAuth)
    match /accounts/{accountId} {
      allow read, write: if isAuthenticated();
    }
    
    // Sessions collection (NextAuth)
    match /sessions/{sessionId} {
      allow read, write: if isAuthenticated();
    }
    
    // Quiz Results
    match /quizResults/{resultId} {
      allow read: if isAuthenticated() && resource.data.userId == request.auth.uid;
      allow create: if isAuthenticated() && request.resource.data.userId == request.auth.uid;
      allow update, delete: if isAuthenticated() && resource.data.userId == request.auth.uid;
    }
    
    // Net Worth Data
    match /netWorthData/{entryId} {
      allow read: if isAuthenticated() && resource.data.userId == request.auth.uid;
      allow create: if isAuthenticated() && request.resource.data.userId == request.auth.uid;
      allow update, delete: if isAuthenticated() && resource.data.userId == request.auth.uid;
    }
    
    // Decisions
    match /decisions/{decisionId} {
      allow read: if isAuthenticated() && resource.data.userId == request.auth.uid;
      allow create: if isAuthenticated() && request.resource.data.userId == request.auth.uid;
      allow update, delete: if isAuthenticated() && resource.data.userId == request.auth.uid;
    }
    
    // Investments
    match /investments/{investmentId} {
      allow read: if isAuthenticated() && resource.data.userId == request.auth.uid;
      allow create: if isAuthenticated() && request.resource.data.userId == request.auth.uid;
      allow update, delete: if isAuthenticated() && resource.data.userId == request.auth.uid;
    }
    
    // Goals
    match /goals/{goalId} {
      allow read: if isAuthenticated() && resource.data.userId == request.auth.uid;
      allow create: if isAuthenticated() && request.resource.data.userId == request.auth.uid;
      allow update, delete: if isAuthenticated() && resource.data.userId == request.auth.uid;
    }
    
    // Emergency Funds
    match /emergencyFunds/{fundId} {
      allow read: if isAuthenticated() && resource.data.userId == request.auth.uid;
      allow create: if isAuthenticated() && request.resource.data.userId == request.auth.uid;
      allow update, delete: if isAuthenticated() && resource.data.userId == request.auth.uid;
    }
    
    // Challenge Progress
    match /challengeProgress/{progressId} {
      allow read: if isAuthenticated() && resource.data.userId == request.auth.uid;
      allow create: if isAuthenticated() && request.resource.data.userId == request.auth.uid;
      allow update, delete: if isAuthenticated() && resource.data.userId == request.auth.uid;
    }
  }
}
```

## Step 5: Create Firestore Indexes

In Firestore Database > Indexes tab, create these composite indexes:

1. **Collection:** `quizResults`
   - Fields: `userId` (Ascending), `completedAt` (Descending)

2. **Collection:** `netWorthData`
   - Fields: `userId` (Ascending), `calculatedAt` (Descending)

3. **Collection:** `decisions`
   - Fields: `userId` (Ascending), `createdAt` (Descending)

4. **Collection:** `investments`
   - Fields: `userId` (Ascending), `createdAt` (Descending)

5. **Collection:** `goals`
   - Fields: `userId` (Ascending), `status` (Ascending), `createdAt` (Descending)

6. **Collection:** `emergencyFunds`
   - Fields: `userId` (Ascending), `updatedAt` (Descending)

7. **Collection:** `challengeProgress`
   - Fields: `userId` (Ascending), `status` (Ascending)

## Step 6: Get Firebase Config

1. In Firebase Console, go to **Project Settings** (gear icon)
2. Scroll to "Your apps" section
3. Click "Web" icon (</>) to add a web app
4. Register app name: `Edmund Moore Platform`
5. Copy the Firebase configuration object

## Step 7: Get Admin SDK Credentials

1. In Firebase Console, go to **Project Settings** > **Service Accounts**
2. Click "Generate new private key"
3. Download the JSON file
4. Keep this file secure (DO NOT commit to git)

## Step 8: Configure Environment Variables

1. Copy `env.local.example` to `.env.local`
2. Fill in Firebase config from Step 6
3. Fill in Admin SDK credentials from Step 7

```env
# From Firebase Config (Step 6)
NEXT_PUBLIC_FIREBASE_API_KEY="AIzaSy..."
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your-project.firebaseapp.com"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="your-project-id"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your-project.appspot.com"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="123456789"
NEXT_PUBLIC_FIREBASE_APP_ID="1:123456789:web:abc123"
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID="G-XXXXXXXXXX"

# From Admin SDK JSON (Step 7)
FIREBASE_ADMIN_PROJECT_ID="your-project-id"
FIREBASE_ADMIN_CLIENT_EMAIL="firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com"
FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour-Key-Here\n-----END PRIVATE KEY-----\n"

# Generate with: openssl rand -base64 32
NEXTAUTH_SECRET="your-generated-secret"
NEXTAUTH_URL="http://localhost:3000"
```

## Step 9: Install Dependencies

```bash
cd edmundmoore-website
npm install
```

## Step 10: Test Connection

```bash
npm run dev
```

Visit http://localhost:3000 and try:
1. Creating an account
2. Signing in
3. Using a tool (saves to Firestore)
4. Viewing dashboard

## Step 11: Verify Data in Firestore

1. Go to Firebase Console > Firestore Database
2. Check that collections are being created
3. Verify data is being saved correctly

## Firestore Collections Created

After using the platform, you should see these collections:

- `users` - User profiles
- `accounts` - OAuth accounts
- `sessions` - Active sessions
- `quizResults` - Philosophy quiz results
- `netWorthData` - Net worth calculations
- `decisions` - Strategic decisions
- `investments` - Investment scenarios
- `goals` - Financial goals
- `emergencyFunds` - Emergency fund plans
- `challengeProgress` - 30-Day Challenge progress

## Production Deployment

For production (Vercel, Netlify, etc.):

1. Add environment variables to hosting platform
2. Update `NEXTAUTH_URL` to production domain
3. Add production domain to Firebase authorized domains:
   - Firebase Console > Authentication > Settings > Authorized domains
4. Update Firestore security rules if needed
5. Enable Firebase App Check for additional security (optional)

## Backup Strategy

1. Enable automatic backups in Firebase Console
2. Or use Firebase CLI:
```bash
firebase firestore:export gs://your-bucket/backups
```

## Monitoring

1. Enable Firebase Analytics
2. Set up Firebase Performance Monitoring
3. Configure Firebase Crashlytics (optional)

## Cost Optimization

Firebase free tier includes:
- 50,000 reads/day
- 20,000 writes/day
- 20,000 deletes/day
- 1 GB storage

For production, monitor usage in Firebase Console > Usage and billing

## Troubleshooting

**Error: "Missing or insufficient permissions"**
- Check Firestore security rules
- Verify user is authenticated
- Ensure userId matches in security rules

**Error: "Firebase: Error (auth/configuration-not-found)"**
- Verify all environment variables are set
- Check .env.local file exists
- Restart dev server after changing env vars

**Error: "Index not found"**
- Create required indexes in Firestore Console
- Wait 5-10 minutes for indexes to build

## Next Steps

1. Test all features with Firebase
2. Monitor Firestore usage
3. Optimize queries if needed
4. Set up backup automation
5. Configure monitoring and alerts
