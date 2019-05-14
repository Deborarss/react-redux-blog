import jsonPlaceholder from '../apis/jsonPlaceholder';

export const FETCH_POSTS = 'FETCH_POSTS';

export const fetchPosts = () => async dispatch => {
  const res = await jsonPlaceholder.get('/post');
  dispatch({ type: 'FETCH_POSTS', payload: res });
};
