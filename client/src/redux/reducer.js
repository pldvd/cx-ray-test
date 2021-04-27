import * as Types from './types';

const initialState = {
  posts: [],
  isLoading: false,
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.REQUEST_START:
      return {
        ...state,
        isLoading: true
      };

    case Types.REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    case Types.FETCH_POSTS_SUCCESS:
      return {
        ...initialState,
        posts: action.posts,
      };

    case Types.UPDATE_POST_SUCCESS:
      const updated = action.post;
      const posts = state.posts
        .filter(post => post._id !== updated._id)
        .concat(updated);

      return {
        ...initialState,
        posts
      };

    case Types.REMOVE_POST_SUCCESS:
      const removed = action.post;
      const posts = state.posts
        .filter(post => post._id !== removed._id);

      return {
        ...initialState,
        posts
      };

    case Types.ADD_POST_SUCCESS:
      const added = action.post;
      const posts = state.posts.concat(added);

      return {
        ...initialState,
        posts
      };
      
    default:
      return state;
  }
}