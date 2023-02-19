import { useCallback } from 'react'
import { ChatMessageForm, MessageFormValues } from '~/chat/ChatMessageForm'
import { useMessages } from '~/chat/useMessages'

export const ChatPage = () => {
  const { messages, pushMessage } = useMessages()

  const handleSubmit = useCallback((data: MessageFormValues) => {
    pushMessage(data?.message)
  }, [pushMessage])

  return (
    <div>
      <div>
        {messages.map((message, i) => (
          <p key={message + i}>{message}</p>
        ))}
      </div>
      <div>
        <ChatMessageForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}