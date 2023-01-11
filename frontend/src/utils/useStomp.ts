import { Client, messageCallbackType } from '@stomp/stompjs';

const useStomp = (
  client: React.MutableRefObject<Client | undefined>,
  destination: string,
  callback: messageCallbackType,
) => {
  const connect = () => {
    client.current = new Client({
      brokerURL: 'ws://localhost:8080/stomp',
      reconnectDelay: 200000,
      heartbeatIncoming: 16000,
      heartbeatOutgoing: 16000,
      onConnect: () => {
        console.error('0 stomp onConnect : ');
        client.current?.subscribe(destination, callback);
      },
      onStompError: (frame) => {
        console.error('1 stomp error : ', frame);
      },
      onDisconnect: (frame) => {
        console.error('2 disconnect : ', frame);
      },
      onWebSocketClose: (frame) => {
        console.log('3 Stomp WebSocket Closed', frame);
      },
      debug: (str) => {
        console.error('4 debug : ', str);
      },
      onUnhandledMessage: (msg) => {
        console.log('5 unhandled Message', msg);
      },
    });

    client.current?.activate();
  };

  const disconnect = () => {
    client.current?.deactivate();
  };

  return [connect, disconnect];
};

export default useStomp;
