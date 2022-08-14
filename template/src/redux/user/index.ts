import {EntityKeys} from '../schema';
import {createSlice, isAnyOf} from '@reduxjs/toolkit';
import adapter from './adapter';
import thunks from './thunks';
import {RootState} from '../store';

const initialValues = {
  currentUser: null,
};

const slice = createSlice({
  name: EntityKeys.USERS,
  initialState: initialValues,
  reducers: {},
  extraReducers: builder => {},
});

const User = {
  thunks,
  slice,
  adapter,
};

export const selectCurrentUser = (state: RootState) => state.users.currentUser;
export default User;
