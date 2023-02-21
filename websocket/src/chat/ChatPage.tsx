import { useCallback, useEffect } from 'react'
import { ChatMessageForm, MessageFormValues } from '~/chat/ChatMessageForm'
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
      pushMessage(messageObj.message)
    }
  }, [lastMessage, pushMessage])

  const handleSubmit = useCallback((data: MessageFormValues) => {
    sendJsonMessage({
      username,
      message: data.message,
    })
  }, [sendJsonMessage])

  if (readyState !== ReadyState.OPEN) {
    return <div>...Loading</div>
  }

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