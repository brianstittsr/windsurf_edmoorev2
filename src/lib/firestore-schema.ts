/**
 * Firestore Database Schema for Edmund Moore Financial Freedom Platform
 * 
 * Collections Structure:
 * - users/
 * - quizResults/
 * - netWorthData/
 * - decisions/
 * - investments/
 * - goals/
 * - emergencyFunds/
 * - challengeProgress/
 */

import { Timestamp } from 'firebase/firestore';

// ============================================
// USER TYPES
// ============================================

export interface User {
  id: string;
  email: string;
  name: string;
  emailVerified: boolean;
  image?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  lastLoginAt?: Timestamp;
  preferredLanguage?: 'en' | 'es';
}

export interface Account {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string;
  access_token?: string;
  expires_at?: number;
  token_type?: string;
  scope?: string;
  id_token?: string;
  session_state?: string;
}

export interface Session {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Timestamp;
}

// ============================================
// QUIZ & ASSESSMENT TYPES
// ============================================

export interface QuizResult {
  id: string;
  userId: string;
  score: number;
  personalityType: 'strategic' | 'balanced' | 'action';
  answers: Record<string, number>;
  completedAt: Timestamp;
}

// ============================================
// FINANCIAL DATA TYPES
// ============================================

export interface NetWorthEntry {
  id: string;
  userId: string;
  assets: {
    cash: number;
    investments: number;
    realEstate: number;
    vehicles: number;
    retirement: number;
    other: number;
  };
  liabilities: {
    creditCards: number;
    studentLoans: number;
    carLoans: number;
    mortgage: number;
    personalLoans: number;
    other: number;
  };
  totalAssets: number;
  totalLiabilities: number;
  netWorth: number;
  calculatedAt: Timestamp;
}

export interface Decision {
  id: string;
  userId: string;
  title: string;
  description: string;
  factors: {
    urgency: number;
    financialImpact: number;
    timeHorizon: number;
    reversibility: number;
    emotionalPressure: number;
    informationAvailability: number;
  };
  totalScore: number;
  recommendation: 'act-now' | 'strategic-patience' | 'monitor';
  createdAt: Timestamp;
}

export interface Investment {
  id: string;
  userId: string;
  scenarioName: string;
  initialInvestment: number;
  monthlyContribution: number;
  annualReturn: number;
  years: number;
  totalContributions: number;
  totalEarnings: number;
  finalValue: number;
  createdAt: Timestamp;
}

// ============================================
// GOAL TRACKING TYPES
// ============================================

export interface FinancialGoal {
  id: string;
  userId: string;
  title: string;
  category: 'emergency-fund' | 'retirement' | 'home' | 'education' | 'debt-payoff' | 'investment' | 'travel' | 'other';
  targetAmount: number;
  currentAmount: number;
  targetDate?: Timestamp;
  priority: 'high' | 'medium' | 'low';
  status: 'in-progress' | 'completed' | 'paused';
  createdAt: Timestamp;
  updatedAt: Timestamp;
  completedAt?: Timestamp;
}

export interface EmergencyFund {
  id: string;
  userId: string;
  monthlyExpenses: {
    housing: number;
    utilities: number;
    food: number;
    transportation: number;
    insurance: number;
    healthcare: number;
    debt: number;
    other: number;
  };
  totalMonthlyExpenses: number;
  targetMonths: number;
  targetAmount: number;
  currentAmount: number;
  monthlySavings: number;
  monthsToGoal: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// ============================================
// CHALLENGE TYPES
// ============================================

export interface ChallengeProgress {
  id: string;
  userId: string;
  startDate: Timestamp;
  completedDays: number[];
  currentDay: number;
  streak: number;
  lastCompletedAt?: Timestamp;
  status: 'active' | 'completed' | 'paused';
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// ============================================
// COLLECTION NAMES
// ============================================

export const COLLECTIONS = {
  USERS: 'users',
  ACCOUNTS: 'accounts',
  SESSIONS: 'sessions',
  QUIZ_RESULTS: 'quizResults',
  NET_WORTH_DATA: 'netWorthData',
  DECISIONS: 'decisions',
  INVESTMENTS: 'investments',
  GOALS: 'goals',
  EMERGENCY_FUNDS: 'emergencyFunds',
  CHALLENGE_PROGRESS: 'challengeProgress',
} as const;

// ============================================
// HELPER TYPES
// ============================================

export type CollectionName = typeof COLLECTIONS[keyof typeof COLLECTIONS];

export interface FirestoreDocument {
  id: string;
  createdAt: Timestamp;
  updatedAt?: Timestamp;
}

// ============================================
// VALIDATION SCHEMAS (for use with Zod)
// ============================================

export const VALIDATION_RULES = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: {
    minLength: 8,
    requireUppercase: true,
    requireLowercase: true,
    requireNumber: true,
  },
  amounts: {
    min: 0,
    max: 999999999,
  },
  percentages: {
    min: 0,
    max: 100,
  },
} as const;
