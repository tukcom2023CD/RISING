import { Client } from '@stomp/stompjs';

const useStompClient = () => {
  const client = new Client({
    brokerURL: 'ws://localhost:8080/stomp',
    reconnectDelay: 200000,
    heartbeatIncoming: 16000,
    heartbeatOutgoing: 16000,
    debug: (str) => {
      console.log(str);
    },
    onConnect: () => {
      console.log('0 stomp onConnect : ');
    },
    onStompError: (frame) => {
      console.error('1 stomp error : ', frame);
    },
    onDisconnect: (frame) => {
      console.log('2 disconnect : ', frame);
    },
    onWebSocketClose: (frame) => {
      console.log('3 Stomp WebSocket Closed', frame);
    },
    onUnhandledMessage: (msg) => {
      console.log('5 unhandled Message', msg);
    },
  });

  return client;
}

export default useStompClient;
