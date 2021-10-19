export interface IProfile {
  isLoggedIn: boolean;
  username: string;
  name: string;
  bio: string;
  avatarUrl?: string;
  profileUrl?: string;
}
