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
import React, { useEffect, useRef, useState } from 'react';
import { Client, IMessage } from '@stomp/stompjs';
import axios from 'axios';
import { debounce } from 'lodash';
import MonacoEditor from 'react-monaco-editor';
import 'monaco-editor/esm/vs/basic-languages/python/python.contribution';
import 'monaco-editor/esm/vs/basic-languages/java/java.contribution';
import 'monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution';
import 'monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution';
import 'monaco-editor/esm/vs/basic-languages/csharp/csharp.contribution';
import 'monaco-editor/esm/vs/basic-languages/go/go.contribution';
import 'monaco-editor/esm/vs/basic-languages/kotlin/kotlin.contribution';
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';
import 'monaco-editor/esm/vs/basic-languages/ruby/ruby.contribution';
import 'monaco-editor/esm/vs/basic-languages/swift/swift.contribution';
import 'monaco-editor/esm/vs/basic-languages/scala/scala.contribution';
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

  const handleSub = (body: IMessage) => {
    const jsonBody = JSON.parse(body.body);
    console.log(jsonBody.text);
    setSolvedCode(jsonBody.text);
  };

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

  const client = useRef<Client>();

  const connect = () => {
    client.current = new Client({
      brokerURL: `ws://172.30.1.22:8080/stomp`,

      reconnectDelay: 200000,
      heartbeatIncoming: 16000,
      heartbeatOutgoing: 16000,
      debug: (str) => {
        console.log(str);
      },
      onConnect: () => {
        console.log('0 stomp onConnect : ');
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

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    if (value === 'javascript' || value === 'typescript') {
      alert('해당 언어의 컴파일 기능 개발 중입니다!');
      return;
    }
    if (value === 'python') {
      setSelectedLanguage('python3');
    } else {
      setSelectedLanguage(value);
    }
  };

  const [compileResult, setCompileResult] = useState('');

  const compileCode = async () => {
    const codeData = {
      language: selectedLanguage === 'python' ? 'python3' : selectedLanguage,
      version: 'string',
      code: solvedCode,
      input: null,
    };

    try {
      const response = await axios.post('/api/v1/codes', codeData);
      console.log(response.data);
      setCompileResult(response.data.data.output);
    } catch (error) {
      console.error(error);
      alert('언어 선택 및 코드 내용을 다시 한 번 확인하세요!');
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      <NavBar />
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
          <div className="flex justify-between">
            {/* First Code Editor */}
            <div className="relative flex flex-col-reverse w-1/2">
              <div className="rounded-xl h-[20rem] w-full mx-1 my-2 pt-1.5 px-1 bg-white border-4 border-violet-300 overflow-y-auto">
                <select
                  value={selectedLanguage === 'python3' ? 'python' : selectedLanguage}
                  onChange={handleLanguageChange}
                  className="absolute top-4 right-6 border-2 border-gray-300 rounded-md bg-white z-10"
                >
                  <option value="c">C</option>
                  <option value="cpp">C++</option>
                  <option value="csharp">C#</option>
                  <option value="go">GO</option>
                  <option value="java">Java</option>
                  <option value="javascript">JavaScript</option>
                  <option value="typescript">TypeScript</option>
                  <option value="kotlin">Kotlin</option>
                  <option value="python">Python3</option>
                  <option value="ruby">Ruby</option>
                  <option value="scala">Scala</option>
                  <option value="swift">Swift</option>
                </select>
                <MonacoEditor
                  value={solvedCode}
                  language={selectedLanguage === 'python3' ? 'python' : selectedLanguage}
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
            {/* Second Code Editor */}
            <div className="relative flex flex-col-reverse w-1/2">
              <div className="rounded-xl h-[20rem] w-full mx-1 my-2 pt-1.5 px-1 bg-white border-4 border-violet-300 overflow-y-auto">
                <select
                  value={selectedLanguage === 'python3' ? 'python' : selectedLanguage}
                  onChange={handleLanguageChange}
                  className="absolute top-4 right-6 border-2 border-gray-300 rounded-md bg-white z-10"
                >
                  <option value="c">C</option>
                  <option value="cpp">C++</option>
                  <option value="csharp">C#</option>
                  <option value="go">GO</option>
                  <option value="java">Java</option>
                  <option value="javascript">JavaScript</option>
                  <option value="typescript">TypeScript</option>
                  <option value="kotlin">Kotlin</option>
                  <option value="python">Python3</option>
                  <option value="ruby">Ruby</option>
                  <option value="scala">Scala</option>
                  <option value="swift">Swift</option>
                </select>
                <MonacoEditor
                  value={solvedCode}
                  language={selectedLanguage === 'python3' ? 'python' : selectedLanguage}
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
      <div className="flex justify-center item-center my-2">
        <Btn text="RUN" onClick={compileCode} />
      </div>
      <div className="flex justify-center item-center my-8">
        <div className="relative flex flex-col-reverse w-3/5">
          <div
            className="flex flex-col rounded-xl h-[20rem] w-full mx-1 my-2 pt-1.5 px-1 border-4 border-violet-300 overflow-y-auto"
            style={{ backgroundColor: ColorSystem.MainColor.Primary }}
          >
            <pre className="text-black font-mono whitespace-pre-wrap">
              {compileResult}
            </pre>
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
