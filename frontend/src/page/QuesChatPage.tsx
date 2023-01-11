import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import MentoNavBar from 'components/MentoNavBar';
import Tag from 'components/Tag';
import send from 'images/send.png';
import profile from 'images/profile.png';
import { Client, IMessage } from '@stomp/stompjs';
import { useEffect, useRef, useState } from 'react';
import OthersMessage from 'components/Chat/OthersMessage';
import MyMessage from 'components/Chat/MyMessage';
import { useLocation } from 'react-router-dom';
import useStomp from 'utils/useStomp';
import useInput from 'utils/useInput';

interface ChatMessage {
  sender: string;
  content: string;
}

const DUMMY_CHAT: ChatMessage[] = [
  {
    sender: '나',
    content: '안녕하세요',
  },
  {
    sender: '너',
    content: '안녕하세요~~~!!',
  },
  {
    sender: '나',
    content: '안녕하십니까 !!',
  },
  {
    sender: '너',
    content: '반가워요 !',
  },
];

function QuesChatPage() {
  const [content, onChatInput, setContent] = useInput('');
  const [chatList, setChatList] = useState(DUMMY_CHAT);
  const chatListRef = useRef<HTMLUListElement>(null);
  const sender= "나";
  const client = useRef<Client>();
  
    /** 응답받은 body를 채팅 목록 배열에 push */
  const handleSub = (body: IMessage) => {
    const jsonBody = JSON.parse(body.body);
    setChatList((_chatList: ChatMessage[]) => [..._chatList, jsonBody]);
  };

  /** 채팅 데이터를 destination에 publish */
  const handlePub = () => {
    if (!client.current?.connected) return;
    client.current.publish({
      destination: 'pub/chat/message/1',
      body: JSON.stringify({
        sender: '나',
        content: '안녕 나야'
      }),
    });
    setContent('');
  };

  const [connect, disconnect] = useStomp(client, '/sub/chat/1', handleSub);


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
    }
  };



  useEffect(() => {
    connect();
    return () => disconnect();
  }, []);


  return (
    // 배경색
    <div
      className="h-full"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      {/* 상단바 */}
      <MentoNavBar />
      <div className="flex justify-center item-center my-8">
        {/* Title */}
        <div className="relative flex flex-col w-3/5">
          <div className="flex flex-col rounded-xl h-32 w-full mx-1 my-2 bg-white border-4 border-violet-300">
            {/* 질문 제목 텍스트로 가져와야함 */}
            <span className="text-text-color text-xl m-4">질문 제목</span>
            <div className="flex flex-row relative ml-2">
              <Tag text="# JavaScript" />
              <Tag text="# python" />
              <div className="absolute top-0 right-2">
                <Tag text="2023-01-04" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 채팅 상대 */}
      <div className="flex justify-center item-center mt-8">
        <div className="w-3/5 h-20 bg-white flex justify-center">
          <div className="">
            <img
              // 이미지가 어떤지 확인이 잘 안되서 외곽선 만들어둠
              className="object-cover w-12 h-12 m-2
              rounded-full border-2 border-violet-300 
              bg-white"
              src={profile}
              alt="profile"
            />
          </div>
          <span className="mt-4">상대방 이름</span>
        </div>
      </div>
      {/* 채팅방 */}
      <div className="flex justify-center item-center">
        <div className="relative flex-row w-3/5 h-[40rem] rounded-xl bg-white">
          <ul ref={chatListRef} className="">
            {chatList.map((chat) => (
              <li>
                {chat.sender === sender ? (
                  <MyMessage
                    content={chat.content}
                  />
                ) : (
                  <OthersMessage
                    content={chat.content}
                  />
                )}
              </li>
            ))}
          </ul>
          <div className="absolute bottom-1 left-1 pl-6 bg-gray-200 w-full">
            <textarea
              className="absolute bottom-1 left-1 w-full h-10 pr-6"
              value={content}
              onChange={onChatInput}
              onKeyDown={onKeyDownEnter}
            />
          </div>
          <button type="button" onClick={handlePub}>
            <img
              className="w-9 absolute bottom-3 right-1"
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
