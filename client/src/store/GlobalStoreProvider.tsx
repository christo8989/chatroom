import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { store } from '~/store/store'

type Props = PropsWithChildren

export const GlobalStoreProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>
}