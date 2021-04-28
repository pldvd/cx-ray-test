import axios from 'axios';
import * as Types from './types';

export const fetchPosts = () => dispatch => {
  dispatch({ type: Types.REQUEST_START });

  axios.get('/list-posts')
    .then(res => {
      dispatch({
        type: Types.FETCH_POSTS_SUCCESS,
        posts: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: Types.REQUEST_FAIL,
        error: err
      })
    })
};

export const updatePost = (id, title, text) => dispatch => {
  dispatch({ type: Types.REQUEST_START });

  axios.put(`/update-post/${id}`, { title, text })
    .then(res => {
      dispatch({
        type: Types.UPDATE_POST_SUCCESS,
        post: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: Types.REQUEST_FAIL,
        error: err
      })
    })
};

export const deletePost = id => dispatch => {
  dispatch({ type: Types.REQUEST_START });

  axios.delete(`/delete-post/${id}`)
    .then(res => {
      dispatch({
        type: Types.REMOVE_POST_SUCCESS,
        post: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: Types.REQUEST_FAIL,
        error: err
      })
    })
};

export const addPost = (title, text) => dispatch => {
  dispatch({ type: Types.REQUEST_START });

  axios.post('/add-post', { title, text })
    .then(res => {
      dispatch({
        type: Types.ADD_POST_SUCCESS,
        post: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: Types.REQUEST_FAIL,
        error: err
      })
    })
};

export const closeToastMessage = () => {
  return { type: Types.CLOSE_TOAST_MESSAGE };
}