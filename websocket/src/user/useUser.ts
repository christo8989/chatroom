import { create } from '~/store/create'
import { GetStateType } from '~/store/getStateType';

const KEY = 'username';

export const useUser = create(
  {
    username: localStorage.getItem(KEY) || '',
  },
  (set) => ({
    saveUsername: (username: string) => {
      localStorage.setItem(KEY, username);
      set({ username })
    },
  }),
)

export type UserState = GetStateType<typeof useUser>;
