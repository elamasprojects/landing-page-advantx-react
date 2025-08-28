export interface FormData {
  industry: string;
  companySize: string;
  currentChallenges: string[];
  processes: string[];
  techLevel: string;
  budget: string;
  timeline: string;
}

export interface Question {
  id: string;
  title: string;
  subtitle?: string;
  type: 'single' | 'multiple';
  options: string[];
}

export interface Recommendation {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  priority: 'Alta' | 'Media' | 'Baja';
  roi: string;
}