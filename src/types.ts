export type PageId = 'home' | 'whats-inside' | 'is-it-for-you';

export interface SuiteItem {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  detail: string;
}

export interface QuizQuestion {
  question: string;
  subtitle: string;
  options: {
    label: string;
    sublabel: string;
    archetype: 'faceless' | 'digital_products' | 'affiliate' | 'coaching';
  }[];
}
