// Exprezzzo AI Type Definitions

// AI Types
export type AIModel = 'claude' | 'gemini' | 'openai';
export type AIProvider = 'anthropic' | 'google' | 'openai';
export type TaskType = 'code' | 'analysis' | 'visual' | 'creative' | 'general' | 'debug';

export interface AIRequest {
  prompt: string;
  taskType?: TaskType;
  projectId?: string;
  userId: string;
  context?: Record<string, any>;
}

export interface AIResponse {
  model: AIModel;
  content: string;
  usage: {
    tokens: number;
  };
}

// User & Project Types
export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role: 'admin' | 'user' | 'guest';
  createdAt: Date;
  subscription: {
    plan: 'free' | 'pro' | 'enterprise';
    status: 'active' | 'canceled' | 'past_due';
  };
}

export interface Project {
  id: string;
  name: string;
  type: 'lvgt' | 'eis' | 'exprezzzo' | 'custom';
  owner: string;
  firebase: {
    projectId: string;
    hosting?: string;
  };
  features: string[];
  createdAt: Date;
}

// Exprezzzo-specific
export interface ExprezzzoConfig {
  project: 'lvgt' | 'eis' | 'exprezzzo';
  environment: 'development' | 'staging' | 'production';
  features: {
    ai: boolean;
    pwa: boolean;
    analytics: boolean;
  };
}
