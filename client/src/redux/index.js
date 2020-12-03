import { combineReducers } from 'redux';

import auth from './auth/reducer';
import memo from './memo/reducer';

export default combineReducers({
  auth,
  memo,
});