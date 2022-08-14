import {combineReducers} from '@reduxjs/toolkit';
import tokenReducer from './tokens/reducer';
import User from './user';
import loadingSlice from './_loading';

const combinedReducer = combineReducers({
  _loading: loadingSlice.reducer,
  tokens: tokenReducer,

  [User.slice.name]: User.slice.reducer,
});

export default combinedReducer;
