import { useCallback } from 'react'
import { ChatMessageForm, MessageFormValues } from '~/chat/ChatMessageForm'
import { selectMessages } from '~/chat/selectMessages'
import { useMessages } from '~/chat/useMessages'

export const ChatPage = () => {
  const messages = useMessages(selectMessages)
  const pushMessage = useMessages(state => state.pushMessage)
  const handleSubmit = useCallback((data: MessageFormValues) => {
    pushMessage(data?.message)
  }, [pushMessage])

  return (
    <div>
      <div>
        {messages.map(message => (
          <p>{message}</p>
        ))}
      </div>
      <div>
        <ChatMessageForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}