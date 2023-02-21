import { PayloadAction } from '@reduxjs/toolkit';
import { Message } from '~/chat/Message';
import { createSlice } from '~/store/createSlice';

interface MessagesState {
  messages: Message[];
}

const initialState: MessagesState = {
  messages: [],
}

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    pushMessage(state, action: PayloadAction<Message>) {
      if (!state.messages.some(a => a.id === action.payload.id)) {
        state.messages.push(action.payload)
      }
    }
  }
})

export const messages = messagesSlice.reducer;

export const { pushMessage } = messagesSlice.actions;