import { useCallback } from 'react';
import { useUser } from '~/user/useUser'
import { UsernameForm, UsernameFormValues } from '~/user/UsernameForm';

export const UsernamePage = () => {
  const saveUsername = useUser(state => state.saveUsername);
  const onSubmit = useCallback((data: UsernameFormValues) => {
    saveUsername(data.username)
  }, [saveUsername])

  return (
    <div>
      <div>We didn't find a username. What would you like to be called?</div>
      <div>
        <UsernameForm onSubmit={onSubmit} />
      </div>
    </div>
  )
}