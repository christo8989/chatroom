import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStoreProvider } from '~/store'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStoreProvider>
      <App />
    </GlobalStoreProvider>
  </React.StrictMode>,
)

// const socket = new WebSocket('ws://localhost:4000');

// // Connection opened
// socket.addEventListener('open', (event) => {
//   socket.send('Hello Server!');
// });

// // Listen for messages
// socket.addEventListener('message', (event) => {
//   console.log('Message from server ', event.data);
// });
