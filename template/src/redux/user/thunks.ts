import UserAPI from './API';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const doSignIn = createAsyncThunk<any, any, any>(
  'users/login',
  async (data, thunkAPI) => {
    try {
      const response = await UserAPI.signIn(data);
      return {
        data: response.data,
        headers: response.headers,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const doSignOut = createAsyncThunk<any, any, any>(
  'users/signout',
  async (_, thunkAPI) => {
    try {
      const response = await UserAPI.signOut();
      return {
        data: response.data,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const thunks = {
  doSignIn,
  doSignOut,
};

export default thunks;
