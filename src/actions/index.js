import jsonPlaceholder from '../apis/jsonPlaceholder';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_USER = 'FETCH_USER';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  // console.log(getState().posts);
  const userIds = new Set(getState().posts.map(post => post.userId));
  userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
  const res = await jsonPlaceholder.get('/posts');
  dispatch({ type: FETCH_POSTS, payload: res.data });
};

export const fetchUser = id => async dispatch => {
  const res = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: FETCH_USER, payload: res.data });
};
