export interface Partner {
  id: string;
  name: string;
  year: string;
  scope: string[];
  description: string;
  industry: string;
  status: 'Ongoing' | 'Selected Partner' | 'Long-term Client';
  color: string; // The brand color for the red accent or color reveal
  logoUrl?: string; // We will use SVG components for reliability
}

export const partners: Partner[] = [
  {
    id: 'nike',
    name: 'Nike',
    year: '2023 — 2024',
    scope: ['Brand Experience', 'UI Design', 'Frontend Development'],
    description: 'Elevating the digital retail experience with a high-performance landing page for their global premium collections.',
    industry: 'Global Fashion & Sportswear',
    status: 'Selected Partner',
    color: '#E21833',
  },
  {
    id: 'spotify',
    name: 'Spotify',
    year: '2022 — 2023',
    scope: ['Product Design', 'Motion Graphics', 'Creative Tech'],
    description: 'Redefining user engagement through immersive digital campaigns for the South East Asia region.',
    industry: 'Entertainment & Streaming',
    status: 'Long-term Client',
    color: '#1DB954',
  },
  {
    id: 'airbnb',
    name: 'Airbnb',
    year: '2024',
    scope: ['Editorial Design', 'UX Research', 'Design Systems'],
    description: 'Crafting a series of boutique digital experiences for the Luxury Stays category.',
    industry: 'Travel & Hospitality',
    status: 'Ongoing',
    color: '#FF5A5F',
  },
  {
    id: 'stripe',
    name: 'Stripe',
    year: '2021 — 2023',
    scope: ['Technical Integration', 'UI Refinement', 'Docs Experience'],
    description: 'Optimizing developer-facing interfaces for seamless cross-border payment flows.',
    industry: 'Fintech & Infrastructure',
    status: 'Long-term Client',
    color: '#635BFF',
  },
  {
    id: 'apple',
    name: 'Apple',
    year: '2023',
    scope: ['Interactive Design', 'Prototyping', 'Visual Storytelling'],
    description: 'Designing specialized interactive modules for product launch microsites.',
    industry: 'Consumer Electronics',
    status: 'Selected Partner',
    color: '#555555',
  },
  {
    id: 'tesla',
    name: 'Tesla',
    year: '2022',
    scope: ['Data Visualization', 'Interface Design', 'Future Tech'],
    description: 'Conceptualizing next-gen visualization dashboards for energy management ecosystems.',
    industry: 'Automotive & Energy',
    status: 'Ongoing',
    color: '#CC0000',
  }
];
