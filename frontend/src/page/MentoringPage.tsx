import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import NavBar from 'components/NavBar/QuesListNavBar';
import Tag from 'components/Tags/Tag';
import Date from 'components/Tags/Date';
import TitleIndex from 'components/Index/AnsTitleIndex';
import ContentIndex from 'components/Index/ContentIndex';
import Btn from 'components/Btn';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { Client, IMessage } from '@stomp/stompjs';
import axios from 'axios';
import { debounce } from 'lodash';
import MonacoEditor from 'react-monaco-editor';
import 'monaco-editor/esm/vs/basic-languages/python/python.contribution';
import 'monaco-editor/esm/vs/basic-languages/java/java.contribution';
import 'monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution';
import 'monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution';
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';
import EndIndex from 'components/Index/EndIndex';

function MentoringPage() {
  document.documentElement.setAttribute('data-color-mode', 'light');

  localStorage.getItem('postId');
  const postId = localStorage.getItem('postId');

  const navigate = useNavigate();
  const goToAnsCheckPage = () => {
    axios
      .put(`/api/v1/posts/${postId}/solve`, {
        solvedCode,
      })
      .then((res) => {
        console.log(solvedCode);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(tags);
        console.log(error);
      });
    navigate('/privateanscheckpage');
  };

  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState('');

  useEffect(() => {
    (async () => {
      await axios
        .get(`/api/v1/posts/${postId}`)
        .then((res) => {
          console.log(res.data.data);
          setTitle(res.data.data.title);
          setTags(res.data.data.tags);
          setDate(res.data.data.created_at);

          // 언어 태그를 찾아 초기값으로 설정하기
          const languageTags = ['Python', 'Java', 'JavaScript', 'TypeScript'];
          const language = res.data.data.tags.find((tag: string) =>
            languageTags.includes(tag),
          );
          if (language) {
            setSelectedLanguage(language.toLowerCase());
          }
        })
        .catch((error) => {
          console.log(tags);
          console.log(error);
        });
    })();
  }, []);

  const [solvedCode, setSolvedCode] = React.useState(``);
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  // const textRef = React.useRef<HTMLInputElement>(null);

  const handleSub = (body: IMessage) => {
    const jsonBody = JSON.parse(body.body);
    console.log(jsonBody.text);
    setSolvedCode(jsonBody.text);
  };

  // 코드 에디터의 onChange 이벤트에서 웹소켓을 통해 코드를 전송

  const handleEditorChange = debounce((value: string) => {
    setSolvedCode(value);

    if (!client.current?.connected) return;
    client.current.publish({
      destination: `/pub/code.message.${postId}`,
      body: JSON.stringify({
        text: `${value}`,
      }),
    });
  }, 300);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    if (value === 'spring') {
      setSelectedLanguage('java');
    } else if (value === 'react') {
      setSelectedLanguage('javascript');
    } else {
      setSelectedLanguage(value);
    }
  };

  const client = useRef<Client>();

  // 웹소켓 클라이인트 생성
  const connect = () => {
    client.current = new Client({
      // http 일경우 ws를 https일 경우 wss
      brokerURL: `wss://${process.env.REACT_APP_HOST}/stomp`,
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
      className="min-h-screen"
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
              {tags.map((tag: string) => (
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
      <div className="flex justify-center item-center my-8">
        <div className="relative flex flex-col-reverse w-3/5">
          {/* 코드 에디터 */}
          <div className="flex justify-center item-center mb-8">
            <div className="relative flex flex-col-reverse w-full">
              <div className="rounded-xl h-[20rem] w-full mx-1 my-2 pt-1.5 px-1 bg-white border-4 border-violet-300 overflow-y-auto">
                <select
                  value={selectedLanguage}
                  onChange={handleLanguageChange}
                  className="absolute top-4 right-6 border-2 border-gray-300 rounded-md bg-white z-10"
                >
                  <option value="java">Java</option>
                  <option value="python">Python</option>
                  <option value="javascript">JavaScript</option>
                  <option value="typescript">TypeScript</option>
                  <option value="spring">Spring</option>
                  <option value="react">React</option>
                </select>
                <MonacoEditor
                  value={solvedCode}
                  language={selectedLanguage}
                  theme="vs-light"
                  width="100%"
                  height="100%"
                  onChange={handleEditorChange}
                  options={{
                    selectOnLineNumbers: true,
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
      {/* 컴파일러 실행 버튼 */}
      <div className="flex justify-center item-center my-2">
        {/* FIXME : 컴파일러 api 호출하는 함수 구현 */}
        <Btn text="RUN" onClick={goToAnsCheckPage} />
      </div>
      {/* 컴파일러 결과 */}
      <div className="flex justify-center item-center my-8">
        <div className="relative flex flex-col-reverse w-3/5">
          <div className="flex flex-col rounded-xl h-[20rem] w-full mx-1 my-2 bg-white border-4 border-violet-300">
            {/* 추후 구현 예정 */}
            <span className="text-text-color text-xl mt-4 mx-4">
              컴파일러 결과
            </span>
          </div>
          <EndIndex />
          <span className="pl-3 text-text-color text-2xl">RESULT</span>
        </div>
      </div>
      <div className="flex justify-center item-center my-4">
        <Btn text="FINISH" onClick={goToAnsCheckPage} />
      </div>
    </div>
  );
}

export default MentoringPage;
