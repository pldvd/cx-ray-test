import * as Types from './types';

const initialState = {
  posts: [],
  isLoading: false,
  error: null
};

const reducer = (state = initialState, action) => {
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
      
      return {
        ...initialState,
        posts: state.posts
          .map(post => {
            if (post._id === updated._id) {
              return updated;
            }
            return post;
          })
      };

    case Types.REMOVE_POST_SUCCESS:
      const removed = action.post;

      return {
        ...initialState,
        posts: state.posts
          .filter(post => post._id !== removed._id)
      };

    case Types.ADD_POST_SUCCESS:
      const added = action.post;

      return {
        ...initialState,
        posts: state.posts.concat(added)
      };

    default:
      return state;
  }
}

export default reducer;