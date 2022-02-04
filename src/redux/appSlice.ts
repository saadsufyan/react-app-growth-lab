import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export interface AppState {
  user: {
    fullName: string,
    password: string,
    accountId: string,
    isEmail:boolean,
    email:string,
    phone:string,
  };
}

const initialState: AppState = {
  user: {
    fullName: '',
    password: '',
    accountId: '',
    isEmail: true,
    email: '',
    phone: '',
  },
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<AppState>) => {
      state.user = action?.payload?.user;
    },
  },
});

export const { addUser } = appSlice.actions;
export const selectCount = (state: RootState) => state.app

export default appSlice.reducer;
