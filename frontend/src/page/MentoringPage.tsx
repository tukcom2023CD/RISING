import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import NavBar from 'components/NavBar/NavBar';
import Tag from 'components/Tags/Tag';
import Date from 'components/Tags/Date';
import TitleIndex from 'components/Index/AnsTitleIndex';
import ContentIndex from 'components/Index/ContentIndex';
import Btn from 'components/Btn';
import { useLocation, useNavigate } from 'react-router-dom';
import CodeEditor from '@uiw/react-textarea-code-editor';
import React, { useEffect, useRef, useState } from 'react';
import { Client, IMessage } from '@stomp/stompjs';
import axios from 'axios';
// import voice from 'images/voice.png';
// import screen from 'images/screen.png';
// import record from 'images/record.png';

// 과외 질문 멘토링 중인 페이지
function MentoringPage() {
  document.documentElement.setAttribute('data-color-mode', 'light');
  const location = useLocation();
  const state = location.state as { id: number };
  const postId = state.id;

  const navigate = useNavigate();
  const goToAnsCheckPage = () => {
    navigate('/privateanscheckpage', { state: { id: postId } });
  };

  const [title, setTitle] = useState('');
  const [userId, setUserId] = useState(0);
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState('');

  useEffect(() => {
    (async () => {
      await axios
        // 특정 게시글 조회
        // 질문 게시글에서 질문 아이디 받아와야함.
        .get(`/posts/${postId}`)
        .then((res) => {
          console.log(res.data.data);
          setTitle(res.data.data.title);
          setUserId(res.data.data.userId);
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
      // STOMP 서버에서 메시지를 받기 위해 @MessageMapping 으로 연결해둔 주소
      destination: `/pub/code.message.${1}`,
      // pub=전송 prefix, code.message.{postId}
      // STOMP 서버에서 정의하고 있는 형식에 맞게 가공
      body: JSON.stringify({
        text: `${codeList}`,
      }),
    });
    // 메시지를 보내면 setContent('');을 통해 입력란을 초기화한다
    // setContent('');
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
      // http 일경우 ws를 https일 경우 wss를 붙여서
      brokerURL: 'ws://localhost:8080/stomp',
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
        // ${postId}
        client.current?.subscribe(
          `/exchange/rising.exchange/code.${1}`,
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

  // 페이지가 렌더링 될 때 실행, 페이지 벗어나면 웹소켓 연결 종료
  // 의존성을 []로 줘서 connect가 한번만 실행되도록 함
  useEffect(() => {
    connect();
    client.current?.activate(); // 클라이언트 활성화
    return () => {
      client.current?.deactivate(); // 클라이언트 비활성화
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
            {/* 질문 제목 텍스트로 가져와야함 */}
            <span className="text-text-color text-xl mt-4 mx-4">{title}</span>
            <div className="my-2 pl-2 flex flex-row relative">
              {tags.map((tag: any) => (
                <Tag text={tag} />
              ))}
              <div className="absolute top-0 right-1">
                <Date date={date} />
              </div>
            </div>
          </div>
          {/* title index */}
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
          {/* contnet index */}
          <ContentIndex />
          <span className="pl-3 text-text-color text-2xl">CONTENT</span>
        </div>
      </div>
      {/* finish button */}
      <div className="flex justify-center item-center my-8">
        <Btn text="FINISH" onClick={goToAnsCheckPage} />
      </div>
    </div>
  );
}

export default MentoringPage;
