import { selectUsername } from '~/user/selectUsername'
import { UsernamePage } from '~/user/UsernamePage'
import { useUser } from '~/user/useUser'

export const Router = () => {
  const username = useUser(selectUsername)

  if (username) {
    return <>Chat Room</>
  }

  return <UsernamePage />
}