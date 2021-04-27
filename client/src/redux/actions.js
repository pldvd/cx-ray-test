import axios from 'axios';
import * as Types from './types';

export const fetchPosts = () => dispatch => {
  dispatch({ type: Types.FETCH_POSTS_START });

  axios.get('/list-posts')
    .then(res => {
      dispatch({
        type: Types.FETCH_POSTS_SUCCESS,
        posts: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: Types.FETCH_POSTS_FAIL,
        error: err
      })
    })
};

export const updatePost = id => dispatch => {
  dispatch({ type: Types.UPDATE_POST_START });

  axios.put(`/update-post/${id}`)
    .then(res => {
      dispatch({
        type: Types.UPDATE_POST_SUCCESS,
        post: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: Types.UPDATE_POST_FAIL,
        error: err
      })
    })
};

export const deletePost = id => dispatch => {
  dispatch({ type: Types.REMOVE_POST_START });

  axios.delete(`/delete-post/${id}`)
    .then(res => {
      dispatch({
        type: Types.REMOVE_POST_SUCCESS,
        post: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: Types.REMOVE_POST_FAIL,
        error: err
      })
    })
};