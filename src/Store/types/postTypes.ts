export interface Post {
  id?: number; // not used for updates
  title: string;
}

export type PostState = {
  posts: Array<Post>;
}

export type PostAction = {
  type: string;
  post: Post;
}
