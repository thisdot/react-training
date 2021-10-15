import { Post, PostAction } from "../types/postTypes"

export const ADD_POST = "ADD_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";

export function addPost(post: Post): PostAction {
  const action: PostAction = {
    type: ADD_POST,
    post,
  };
  return action;
}

export function updatePost(post: Post): PostAction {
  const action: PostAction = {
    type: UPDATE_POST,    
    post,
  };
  return action;
}

export function deletePost(post: Post): PostAction {
  const action: PostAction = {
    type: DELETE_POST,
    post,
  }
  return action;
}
