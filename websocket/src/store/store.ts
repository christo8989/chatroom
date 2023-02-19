import { configureStore } from '@reduxjs/toolkit'
import { messages } from '~/chat'
import { user } from '~/user'

export const store = configureStore({
  reducer: {
    messages,
    user,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch