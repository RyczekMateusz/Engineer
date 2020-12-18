import { combineReducers } from 'redux';

import { appReducer } from './AppReducer.js'

export const rootReducer = combineReducers({
  offers: appReducer,
});