import { useCallback, useEffect } from 'react'
import { ChatMessageForm, MessageFormValues } from '~/chat/ChatMessageForm'
import { Message } from '~/chat/Message'
import { useMessages } from '~/chat/useMessages'
import { useWebSocket } from '~/chat/useWebSocket'
import { useUser } from '~/user'

export const ChatPage = () => {
  const { username } = useUser()
  const { readyState, ReadyState, sendJsonMessage, lastMessage } = useWebSocket()
  const { messages, pushMessage } = useMessages()

  useEffect(() => {
    if (lastMessage) {
      const messageObj = JSON.parse(lastMessage.data)
      pushMessage(messageObj)
    }
  }, [lastMessage, pushMessage])

  const handleSubmit = useCallback((data: MessageFormValues) => {
    const partialMessage: Partial<Message> = {
      username,
      text: data.message,
    }
    sendJsonMessage(partialMessage)
  }, [sendJsonMessage])

  if (readyState !== ReadyState.OPEN) {
    return <div>...Loading</div>
  }

  return (
    <div>
      <div>
        {messages.map((message) => (
          <p key={message.id}>{message.username}: "{message.text}"</p>
        ))}
      </div>
      <div>
        <ChatMessageForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}