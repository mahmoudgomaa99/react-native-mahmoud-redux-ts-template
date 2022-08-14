import Users from '../user';
import {doSetToken} from './actions';
import {createReducer} from '@reduxjs/toolkit';
import {TokenKeys, TTokenKeys} from '../_axios';

const initialState: Partial<TTokenKeys> = {};

type TAction = {
  payload: {
    key: keyof TTokenKeys;
    value: string | null;
  };
};

const tokenReducer = createReducer(initialState, builder => {
  builder
    .addCase(Users.thunks.doSignOut.fulfilled, state => {
      state[TokenKeys.TOKEN] = null;
    })
    .addCase(Users.thunks.doSignIn.fulfilled, (state, {payload: {headers}}) => {
      const {token} = headers;
      state[TokenKeys.TOKEN] = token;
    })
    .addCase(doSetToken, (state, {payload: {key, value}}: TAction) => {
      state[key] = value;
    });
});

export default tokenReducer;
