import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import NavBar from 'components/NavBar/NavBar';
import Tag from 'components/Tags/Tag';
import Date from 'components/Tags/Date';
import send from 'images/send.png';
import BasicProfile from 'images/BasicProfile.png';
import { Client, IMessage } from '@stomp/stompjs';
import { useEffect, useRef, useState } from 'react';
import OthersMessage from 'components/Chat/OthersMessage';
import MyMessage from 'components/Chat/MyMessage';
import useInput from 'utils/useInput';
import axios from 'axios';

interface ChatMessage {
  sender: string;
  content: string;
}

const DUMMY_CHAT: ChatMessage[] = [
  {
    sender: '멘토',
    content: '안녕하세요~~~!(예시 채팅)',
  },
];

function QuesChatPage() {
  const [content, onChatInput, setContent] = useInput('');
  const [chatList, setChatList] = useState(DUMMY_CHAT);

  const roomId = localStorage.getItem('roomId');

  const chatListRef = useRef<HTMLUListElement>(null);
  const client = useRef<Client>();

  const handleSub = (body: IMessage) => {
    const jsonBody = JSON.parse(body.body);
    console.log(jsonBody);
    setChatList((_chatList: ChatMessage[]) => [..._chatList, jsonBody]);
  };

  const connect = () => {
    client.current = new Client({
      brokerURL: `ws://${process.env.REACT_APP_HOST}/api/stomp`,
      reconnectDelay: 200000,
      heartbeatIncoming: 16000,
      heartbeatOutgoing: 16000,
      debug: (str) => {
        console.log(str);
      },
      onConnect: () => {
        console.log('0 stomp onConnect : ');
        client.current?.subscribe(
          `/exchange/rising.exchange/chat.${roomId}`,
          handleSub,
        ); // '/exchange/exchange명/패턴 code.*') - exchange큐와 code.*로 연결된 큐 구독
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
  };

  /** 채팅 데이터를 destination에 publish */
  const handlePub = () => {
    if (!client.current?.connected) return;
    client.current.publish({
      destination: `/pub/chat.message.${roomId}`,
      body: JSON.stringify({
        sender: `${sender}`,
        content: `${content}`,
      }),
    });
    setContent('');
  };

  /** 엔터 버튼을 통한 채팅 보내기 함수 */
  const onKeyDownEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (
      e.currentTarget.value.length !== 0 &&
      e.key === 'Enter' &&
      !e.shiftKey &&
      e.nativeEvent.isComposing === false
    ) {
      e.preventDefault();
      handlePub();
      console.log(chatList);
    }
  };

  useEffect(() => {
    connect();
    client.current?.activate();
    return () => {
      client.current?.deactivate();
    };
  }, []);

  localStorage.getItem('postId');
  const postId = localStorage.getItem('postId');

  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState('');

  useEffect(() => {
    (async () => {
      await axios
        .get(`http://${process.env.REACT_APP_HOST}/api/v1/posts/${postId}`)
        .then((res) => {
          console.log(res.data.data);
          setTitle(res.data.data.title);
          setTags(res.data.data.tags);
          setDate(res.data.data.created_at);
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, []);

  const sender = localStorage.getItem('sender');

  return (
    <div
      className="h-screen"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      {/* 상단바 */}
      <NavBar />
      <div className="flex justify-center item-center my-8">
        {/* Title */}
        <div className="relative flex flex-col w-3/5">
          <div className="flex flex-col rounded-xl h-32 w-full mx-1 my-2 bg-white border-4 border-violet-300">
            <span className="text-text-color text-xl m-4">{title}</span>
            <div className="flex flex-row relative ml-2">
              {tags.map((tag: any) => (
                <Tag key={Math.random() * 500} text={tag} />
              ))}
              <div className="absolute top-0 right-2">
                <Date date={date} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 채팅 상대 */}
      <div className="flex justify-center item-center mt-8">
        <div className="w-3/5 h-16 bg-white flex justify-center">
          <div className="">
            <img
              className="object-cover w-12 h-12 m-2 rounded-full bg-white"
              src={BasicProfile}
              alt="profile"
            />
          </div>
          <span className="mt-4">{sender}</span>
        </div>
      </div>
      {/* 채팅방 */}
      <div className="flex justify-center item-center">
        <div className="relative flex-row w-3/5 h-[40rem] rounded-b-xl bg-white">
          <ul ref={chatListRef} className="">
            {chatList.map((chat) => (
              <li>
                {chat.sender === sender ? (
                  <MyMessage content={chat.content} />
                ) : (
                  <OthersMessage content={chat.content} />
                )}
              </li>
            ))}
          </ul>
          <div className="absolute bottom-1 left-1 w-11/12">
            <textarea
              className="absolute bottom-0 left-0 w-full h-8 text-lg rounded-lg focus:outline-none"
              value={content}
              onChange={onChatInput}
              onKeyDown={onKeyDownEnter}
              placeholder="Chat.."
            />
          </div>
          <button type="button" onClick={handlePub}>
            <img
              className="w-9 absolute bottom-1 right-0"
              src={send}
              alt="send"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuesChatPage;
