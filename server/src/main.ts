// import './paths'
import express from 'express'
import { WebSocketServer } from 'ws'
import { getId, getTimestamp } from './utilities'

const app = express()
const port = 4000;

const wsServer = new WebSocketServer({ noServer: true });
wsServer.on('connection', socket => {
  socket.on('message', message => {
    const messageObj = JSON.parse(message.toString())
    const newMessage = {
      id: getId(),
      ...messageObj,
      timestamp: getTimestamp(),
    }
    console.log('Client Message: ', JSON.stringify(newMessage, null, 2))
  });
});

app.get('/health', (req, res) => {
  res.send(`Healthy - ${getTimestamp()}`)
})

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

server.on('upgrade', (request, socket, head) => {
  wsServer.handleUpgrade(request, socket, head, socket => {
    wsServer.emit('connection', socket, request);
  });
});