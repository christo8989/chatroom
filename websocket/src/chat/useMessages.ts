import { useCallback } from 'react'
import { useDispatch, useSelector } from '~/store'
import { pushMessage as pushMessageAction } from '~/chat/messagesSlice'

export const useMessages = () => {
  const dispatch = useDispatch()
  const pushMessage = useCallback((message: string) => {
    dispatch(
      pushMessageAction(message)
    )
  }, [dispatch])

  const messages = useSelector(state => state.messages.messages)

  return {
    messages,
    pushMessage,
  }
}