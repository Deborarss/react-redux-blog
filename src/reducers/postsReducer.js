import { FETCH_POSTS } from '../actions';

export default (state = [], action) => {
  const { payload } = action;

  switch (action.type) {
    case FETCH_POSTS:
      return payload;
    default:
      return state;
  }
};
