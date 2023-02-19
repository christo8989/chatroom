import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '~/store'
import { User } from '~/user/User'

const KEY = 'username'

interface UserState extends User { }

const initialState: UserState = {
  username: localStorage.getItem(KEY) || '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUsername(state, action: PayloadAction<string>) {
      localStorage.setItem(KEY, action.payload);
      state.username = action.payload;
    },
  },
})

export const user = userSlice.reducer;

export const { saveUsername } = userSlice.actions;