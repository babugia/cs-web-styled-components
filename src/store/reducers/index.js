import currentUser from './currentUser';
import shared from './shared';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  currentUser,
  shared
});

export default rootReducer;
