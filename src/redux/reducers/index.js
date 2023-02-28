import { combineReducers } from 'redux';
import authReducer from './auth';
import creationsReducer from './creations';

const rootReducer = combineReducers({
  auth: authReducer,
  creations: creationsReducer,
});

export default rootReducer;
