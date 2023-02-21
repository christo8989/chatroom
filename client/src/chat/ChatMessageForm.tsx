import { useForm } from '~/forms/useForm'

export interface MessageFormValues {
  message: string;
}

type Props = {
  onSubmit: (data: MessageFormValues) => void;
}

export const ChatMessageForm = ({ onSubmit }: Props) => {
  const { register, handleSubmit, setValue } = useForm<MessageFormValues>();

  const submitForm = handleSubmit(data => {
    onSubmit(data)
    setValue('message', '')
  })

  return (
    <form onSubmit={submitForm}>
      <input {...register('message')} />

      <input type='submit' value='Submit' />
    </form>
  )
}
