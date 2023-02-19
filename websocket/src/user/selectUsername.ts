import { UserState } from 'src/user/useUser';

export const selectUsername = (state: UserState) => state.username;