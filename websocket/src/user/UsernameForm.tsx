import { useForm } from '~/forms/useForm'
import { User } from '~/user/User';

export type UsernameFormValues = Pick<User, 'username'>

type Props = {
  onSubmit: (data: User) => void;
}

export const UsernameForm = ({ onSubmit }: Props) => {
  const { register, handleSubmit } = useForm<UsernameFormValues>();

  const submitForm = handleSubmit(data => {
    onSubmit(data)
  })

  return (
    <form onSubmit={submitForm}>
      <input {...register('username')} />

      <input type='submit' value='Submit' />
    </form>
  )
}