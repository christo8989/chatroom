import { MessagesState } from '~/chat/useMessages';

export const selectMessages = (state: MessagesState) => state.messages;