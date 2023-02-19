import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '~/store/createSlice';

interface MessagesState {
  messages: string[];
}

const initialState: MessagesState = {
  messages: [],
}

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    pushMessage(state, action: PayloadAction<string>) {
      state.messages.push(action.payload)
    }
  }
})

export const messages = messagesSlice.reducer;

export const { pushMessage } = messagesSlice.actions;