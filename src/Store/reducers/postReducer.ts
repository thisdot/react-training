import { ADD_POST, DELETE_POST, UPDATE_POST } from "../actions/postActions";
import { Post, PostAction, PostState } from "../types/postTypes";

const initialState: PostState = {
  posts: [],
};

function postReducer(state: PostState = initialState, action: PostAction): PostState {
  switch (action.type) {
    case ADD_POST:
      const newPost: Post = {
        id: Math.floor(Math.random() * (100 - 1 + 1)) + 1, // for demo purposes
        title: action.post.title,
      };
      
      return {
        ...state,
        posts: [
          ...state.posts,
          newPost,
        ],
      }
    case DELETE_POST:
      const posts: Array<Post> = state.posts.filter(
        post => post.id !== action.post.id
      );

      return {
        ...state,
        posts,
      }
    case UPDATE_POST:
      const updatedPost: Post = {
        title: action.post.title,
      };

      return {
        ...state,
        posts: [
          ...state.posts.map((post) => (
            post.id === action.post.id ? { ...post, ...updatedPost } : post
          )),
        ],
      }
    default:
      return state;
  }
};

export default postReducer;
