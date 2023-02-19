import { ChatPage } from '~/chat/ChatPage'
import { UsernamePage, useUser } from '~/user'

export const Router = () => {
  const {username} = useUser()

  if (username) {
    return <ChatPage />
  }

  return <UsernamePage />
}