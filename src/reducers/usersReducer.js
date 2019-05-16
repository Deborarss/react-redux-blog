import { FETCH_USER } from '../actions';

export default (state = [], action) => {
  const { payload } = action;
  switch (action.type) {
    case FETCH_USER:
      return [...state, payload];
    default:
      return state;
  }
};
