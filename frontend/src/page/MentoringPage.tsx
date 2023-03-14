import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import NavBar from 'components/NavBar/NavBar';
import Tag from 'components/Tags/Tag';
import Date from 'components/Tags/Date';
import TitleIndex from 'components/Index/AnsTitleIndex';
import ContentIndex from 'components/Index/ContentIndex';
import Btn from 'components/Btn';
import { useNavigate } from 'react-router-dom';
import CodeEditor from '@uiw/react-textarea-code-editor';
import React, { useEffect, useRef, useState } from 'react';
import { Client, IMessage } from '@stomp/stompjs';
import axios from 'axios';
// import voice from 'images/voice.png';
// import screen from 'images/screen.png';
// import record from 'images/record.png';

function MentoringPage() {
  document.documentElement.setAttribute('data-color-mode', 'light');

  localStorage.getItem('postId');
  const postId = localStorage.getItem('postId');

  const navigate = useNavigate();
  const goToAnsCheckPage = () => {
    navigate('/privateanscheckpage');
  };

  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState('');

  useEffect(() => {
    (async () => {
      await axios
        .get(`/posts/${postId}`)
        .then((res) => {
          console.log(res.data.data);
          setTitle(res.data.data.title);
          setTags(res.data.data.tags);
          setDate(res.data.data.created_at);
        })
        .catch((error) => {
          console.log(tags);
          console.log(error);
        });
    })();
  }, []);

  // code editor
  const [codeList, setCodeList] = React.useState(`print(hello world)`);
  const textRef = React.useRef(null);

  /** 코드 데이터를 destination에 publish(이벤트 발행, 전송) */
  useEffect(() => {
    if (!client.current?.connected) return;
    client.current.publish({
      destination: `/pub/code.message.${postId}`,
      body: JSON.stringify({
        text: `${codeList}`,
      }),
    });
  }, [codeList]);

  // 바뀐코드 보내기
  const handleSub = (body: IMessage) => {
    const jsonBody = JSON.parse(body.body);
    console.log(jsonBody.text);
    setCodeList(jsonBody.text);
  };

  const client = useRef<Client>();

  // 웹소켓 클라이인트 생성
  const connect = () => {
    client.current = new Client({
      // http 일경우 ws를 https일 경우 wss
      brokerURL: 'ws://www.rising-aha.net/stomp',
      reconnectDelay: 200000,
      heartbeatIncoming: 16000,
      heartbeatOutgoing: 16000,
      debug: (str) => {
        console.log(str);
      },
      // 연결 성공 시 구독하는 로직 실행
      onConnect: () => {
        console.log('0 stomp onConnect : ');
        // 구독한 대상에 대해 메세지를 받기 위해 subscribe 메서드
        client.current?.subscribe(
          `/exchange/rising.exchange/code.${postId}`,
          handleSub,
        );
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
        console.log('4 unhandled Message', msg);
      },
    });
  };

  useEffect(() => {
    connect();
    client.current?.activate();
    return () => {
      client.current?.deactivate();
    };
  }, []);

  return (
    <div
      className="h-screen"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      {/* 상단바 */}
      <NavBar />
      {/* Title */}
      <div className="flex justify-center item-center my-8">
        <div className="relative flex flex-col-reverse w-3/5">
          <div className="flex flex-col rounded-xl h-28 w-full mx-1 my-2 bg-white border-4 border-violet-300">
            <span className="text-text-color text-xl mt-4 mx-4 sm:text-sm md:text-lg lg:text-xl">
              {title}
            </span>
            <div className="my-2 pl-2 flex flex-row relative">
              {tags.map((tag: any) => (
                <Tag key={Math.random() * 500} text={tag} />
              ))}
              <div className="absolute top-0 right-1">
                <Date date={date} />
              </div>
            </div>
          </div>
          <TitleIndex />
          <span className="pl-3 text-text-color text-2xl">TITLE</span>
        </div>
      </div>
      {/* 음성 채팅, 화면 공유, 기록 -> 추가 기능 */}
      {/* <div className="flex justify-center item-center my-8"> */}
      {/* <div>
          <button type="button">
            <img className="w-13 h-10" src={voice} alt="Record" />
          </button>
          <button type="button">
            <img className="w-13 h-10" src={screen} alt="Record" />
          </button>
          <button type="button">
            <img className="w-13 h-10" src={record} alt="Record" />
          </button>
        </div> */}
      {/* </div> */}
      {/* Content */}
      <div className="flex justify-center item-center my-8">
        <div className="relative flex flex-col-reverse w-3/5">
          {/* 코드 에디터 */}
          <div className="flex justify-center item-center mb-8">
            <div className="relative flex flex-col-reverse w-full">
              <div className="rounded-xl h-[20rem] w-full mx-1 my-2 pt-1.5 px-1 bg-white border-4 border-violet-300">
                <CodeEditor
                  value={codeList}
                  ref={textRef}
                  language="py"
                  placeholder="Please enter Python code."
                  onChange={(evn: {
                    target: { value: React.SetStateAction<string> };
                  }) => setCodeList(evn.target.value)}
                  padding={15}
                  style={{
                    fontFamily:
                      'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                    fontSize: 12,
                  }}
                />
              </div>
            </div>
          </div>
          <ContentIndex />
          <span className="pl-3 text-text-color text-2xl">CONTENT</span>
        </div>
      </div>
      <div className="flex justify-center item-center my-8">
        <Btn text="FINISH" onClick={goToAnsCheckPage} />
      </div>
    </div>
  );
}

export default MentoringPage;
