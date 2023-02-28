import { FETCH_CREATIONS } from '../actions/.';

const initialState = [];

const creationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CREATIONS:
      return action.payload;
    default:
      return state;
  }
};

export default creationsReducer;
