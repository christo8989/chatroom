import { create } from '~/store/create'

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

export type UserState = Parameters<Parameters<typeof useUser>[0]>[0];
