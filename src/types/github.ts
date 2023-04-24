export interface Profile {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface SearchResult {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  repos_url: string;
  score: number;
  url: string;
}

export interface SearchResults {
  incomplete_results: boolean;
  items: Array<SearchResult>;
  total_count: number;
}
