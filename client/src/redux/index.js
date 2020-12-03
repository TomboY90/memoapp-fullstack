import { combineReducers } from 'redux';

import auth from './auth';
import memo from './memo';

export default combineReducers({
  auth,
  memo,
});