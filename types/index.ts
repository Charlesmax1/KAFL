// Team Types
export interface Team {
  id: string;
  name: string;
  slug: string;
  logo_url?: string;
  banner_url?: string;
  city: string;
  state: string;
  founded_year: number;
  home_ground: string;
  colors: string[];
  achievements: {
    titles: number;
    years?: string[];
  };
  social_media?: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
  created_at?: string;
}

// Player Types
export interface Player {
  id: string;
  team_id: string;
  first_name: string;
  last_name: string;
  date_of_birth?: string;
  nationality: string;
  position: string;
  number: number;
  height?: number;
  weight?: number;
  photo_url?: string;
  bio?: string;
  joined_date?: string;
}

// Fixture Types
export interface Fixture {
  id: string;
  season_id: string;
  home_team_id: string;
  away_team_id: string;
  match_date: string;
  venue: string;
  round: number;
  status: 'scheduled' | 'live' | 'finished' | 'cancelled';
  home_score: number;
  away_score: number;
  home_team?: Team;
  away_team?: Team;
}

// News Types
export interface News {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  'featured_image': string;
  image_url?: string;
  author: string;
  category: 'federation' | 'teams' | 'community' | 'media' | 'tickets';
  status: 'draft' | 'published' | 'archived';
  published_at: string;
  created_at: string;
}

// Ladder Types
export interface LadderEntry {
  team_id: string;
  team_name: string;
  team_logo?: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  points_for: number;
  points_against: number;
  percentage: number;
  points: number;
  form: string[];
}

// Ticket Types
export interface Ticket {
  id: string;
  fixture_id: string;
  ticket_type: 'adult' | 'child' | 'family' | 'vip' | 'season';
  price: number;
  availability: number;
  section?: string;
}

// Sponsor Types
export interface Sponsor {
  id: string;
  name: string;
  logo_url: string;
  website_url: string;
  tier: 'platinum' | 'gold' | 'silver' | 'community';
  description?: string;
}

// Contact Types
export interface Contact {
  id: string;
  type: 'general' | 'media' | 'sponsorship' | 'ticket' | 'other';
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: 'unread' | 'read' | 'replied';
  created_at: string;
}