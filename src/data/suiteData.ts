import { SuiteItem, QuizQuestion } from '../types';

export const PRODUCT_URL = 'https://stan.store/affiliates/c04855e7-05de-4ad2-8b7c-e4a5371fcab6';
export const PRICE = '$597';

export const SUITE_ITEMS: SuiteItem[] = [
  {
    id: 'streams',
    emoji: '📚',
    title: '24+ income streams to explore',
    subtitle: 'From simple digital downloads to services',
    detail: 'Learn different ways people make money online so you can choose the model that fits your personality, skills, and comfort zone.',
  },
  {
    id: 'video',
    emoji: '🎥',
    title: 'Step-by-step video training',
    subtitle: 'Bite-sized, zero-fluff video tutorials',
    detail: 'Clear, beginner-paced walkthroughs showing you exactly how to set up everything on your computer without tech overwhelm.',
  },
  {
    id: 'quiz',
    emoji: '📝',
    title: 'Quiz to help find your starting point',
    subtitle: 'No more guessing what to do first',
    detail: 'Take a personalized assessment right at the start to pinpoint the single best initial path for your schedule and energy.',
  },
  {
    id: 'roadmap',
    emoji: '🗺️',
    title: 'Roadmap + resources',
    subtitle: 'A clear sequential pathway',
    detail: 'Actionable checklists, PDF guides, and structured milestones so you always know what your next 20-minute action step is.',
  },
  {
    id: 'coaching',
    emoji: '🎙️',
    title: 'Weekly coaching & mentorship',
    subtitle: 'Real humans to answer questions',
    detail: 'Weekly live coaching sessions where you can ask real questions, get your work reviewed, and overcome sticking points with mentors.',
  },
  {
    id: 'templates',
    emoji: '🛠️',
    title: 'Scripts, templates & tech support',
    subtitle: 'Ready-to-use plug & play assets',
    detail: 'Copy-and-paste email templates, social media captions, customizable store themes, and dedicated tech support when you get stuck.',
  },
  {
    id: 'community',
    emoji: '🤎',
    title: 'Private community',
    subtitle: 'A kind, encouraging corner of the web',
    detail: 'Connect with other beginners and thoughtful creators who are building alongside you. Share small wins and encourage one another.',
  },
  {
    id: 'lifetime',
    emoji: '✨',
    title: 'Lifetime access + future updates',
    subtitle: 'Learn at your own pace, forever',
    detail: 'No recurring monthly subscription. Once you join, you receive all future modules, added income stream guides, and updates at no extra cost.',
  },
];

export const STARTER_PATHS = [
  {
    title: 'Faceless Content & Micro-Audio',
    vibe: 'Low social pressure',
    desc: 'Share helpful aesthetic tips and curated resources without ever showing your face on camera.',
    tag: 'Beginner-favorite',
  },
  {
    title: 'Simple Digital Templates & Guides',
    vibe: 'Create once, share anytime',
    desc: 'Turn a checklist, Notion template, or 5-page guide into a useful $9–$27 digital download.',
    tag: 'Quick setup',
  },
  {
    title: 'Affiliate Marketing & Recommendations',
    vibe: 'No product creation needed',
    desc: 'Earn commissions sharing your honest favorite tools, software, books, and courses you actually love.',
    tag: 'Zero inventory',
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: 'How do you feel about showing your face on camera?',
    subtitle: 'There is truly no right or wrong answer here.',
    options: [
      {
        label: 'I prefer staying completely behind the scenes',
        sublabel: 'Aesthetic photos, text carousels, voiceover, or clean templates',
        archetype: 'faceless',
      },
      {
        label: 'I am open to casual stories or videos occasionally',
        sublabel: 'Sharing your authentic journey as you learn and grow',
        archetype: 'affiliate',
      },
      {
        label: 'I love making helpful visual guides and resources',
        sublabel: 'Checklists, Notion setups, worksheets, and planners',
        archetype: 'digital_products',
      },
    ],
  },
  {
    question: 'How much time do you realistically have per week?',
    subtitle: 'Be honest with yourself—consistency beats burning out.',
    options: [
      {
        label: '3 to 5 quiet hours a week',
        sublabel: 'Evenings or weekends while juggling a job or family',
        archetype: 'digital_products',
      },
      {
        label: '5 to 10 hours a week',
        sublabel: 'A steady block of time to build a small online project',
        archetype: 'faceless',
      },
      {
        label: '10+ hours a week',
        sublabel: 'Ready to dive in and learn step-by-step at a faster pace',
        archetype: 'coaching',
      },
    ],
  },
  {
    question: 'What sounds most exciting to you right now?',
    subtitle: 'What makes you think: "Yeah, I could actually enjoy doing that"?',
    options: [
      {
        label: 'Recommending tools and courses I love (Affiliate)',
        sublabel: 'Earn commissions without having to build a course yourself',
        archetype: 'affiliate',
      },
      {
        label: 'Designing cozy digital downloads and printables',
        sublabel: 'Simple PDF guides, aesthetic planners, or Notion boards',
        archetype: 'digital_products',
      },
      {
        label: 'Building a calm, aesthetic niche brand',
        sublabel: 'Sharing inspiration, quotes, and curated recommendations',
        archetype: 'faceless',
      },
    ],
  },
];
