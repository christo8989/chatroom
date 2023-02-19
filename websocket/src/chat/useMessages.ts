import { create } from '~/store/create';
import { GetStateType } from '~/store/getStateType';

export const useMessages = create(
  {
    messages: [] as string[],
  },
  // (set, get) => ({
  //   pushMessage(message: string) {
  //     const messages = [...get().messages];
  //     messages.push(message)
  //     set({ messages })
  //   }
  // }),
  (set, get) => ({
    pushMessage(message: string) {
      const messages = get().messages;
      messages.push(message)
      set({ messages })
    }
  }),
)

export type MessagesState = GetStateType<typeof useMessages>;