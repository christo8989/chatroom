import useWebSocketPackage, { ReadyState } from 'react-use-websocket'

const WS_URL = 'ws://localhost:4000'

export const useWebSocket = () => {
  const socket = useWebSocketPackage(WS_URL)

  return {
    ...socket,
    ReadyState,
  }
}