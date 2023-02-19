import { useCallback } from 'react'
import { useDispatch, useSelector } from '~/store'
import { saveUsername as saveUsernameAction } from '~/user/userSlice'

export const useUser = () => {
  const dispatch = useDispatch()
  const saveUsername = useCallback((username: string) => {
    dispatch(saveUsernameAction(username))
  }, [dispatch])

  const username = useSelector(state => state.user.username);

  return {
    username,
    saveUsername,
  }
}