import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import NavBar from 'components/NavBar/NavBar';
import Tag from 'components/Tags/Tag';
import Date from 'components/Tags/Date';
import TitleIndex from 'components/Index/AnsTitleIndex';
import ContentIndex from 'components/Index/ContentIndex';
import EndIndex from 'components/Index/EndIndex';
import { useEffect, useState } from 'react';
import axios from 'axios';
import EditorViewer from 'components/Editor/EditorViewer';
import MonacoEditor from 'react-monaco-editor';
import 'monaco-editor/esm/vs/basic-languages/python/python.contribution';
import 'monaco-editor/esm/vs/basic-languages/java/java.contribution';
import 'monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution';
import 'monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution';
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';
import { useLocation } from 'react-router-dom';

function PrivateAnsCheckPage() {
  const location = useLocation();
  const state = location.state as {
    id: number;
    roomId: number;
  };
  const [postId, setPostId] = useState<number>(state.id);

  useEffect(() => {
    setPostId(state.id);
  }, [state.id]);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState('');
  const [code, setCode] = useState('');

  useEffect(() => {
    (async () => {
      await axios
        .get(`/api/v1/posts/${postId}`)
        .then((res) => {
          console.log(res.data.data);
          setTitle(res.data.data.title);
          setContent(res.data.data.content);
          setTags(res.data.data.tags);
          setDate(res.data.data.created_at);
          setCode(res.data.data.solvedCode);

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
          console.log(error);
        });
    })();
  }, []);

  const [selectedLanguage, setSelectedLanguage] = useState('python');

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

  return (
    <div
      className="h-full"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
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
      {/* Content */}
      <div className="flex justify-center item-center my-8">
        <div className="relative flex flex-col-reverse w-3/5">
          {/* 코드 에디터 */}
          <div className="flex justify-center item-center mb-8">
            <div className="relative flex flex-col-reverse w-full">
              <div className="flex flex-col rounded-xl h-[20rem] w-full mx-1 my-2 pt-1.5 px-1 bg-white border-4 border-violet-300">
                <div className="p-3">
                  <EditorViewer content={content} />
                </div>
              </div>
            </div>
          </div>
          <ContentIndex />
          <span className="pl-3 text-text-color text-2xl">CONTENT</span>
        </div>
      </div>
      {/* Recorded video */}
      <div className="flex justify-center item-center my-8">
        <div className="relative flex flex-col-reverse w-3/5">
          {/* rounded-xl h-[20rem] w-full mx-1 my-2 pt-1.5 px-1 bg-white border-4 border-violet-300 overflow-y-auto */}
          <div className="rounded-xl h-[20rem] w-full mx-1 my-2 pt-1.5 px-1 bg-white border-4 border-violet-300 overflow-y-auto">
            {/* 추후 구현 예정 */}
            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="absolute top-13 right-6 border-2 border-gray-300 rounded-md bg-white z-10"
            >
              <option value="java">Java</option>
              <option value="python">Python</option>
              <option value="javascript">JavaScript</option>
              <option value="typescript">TypeScript</option>
              <option value="spring">Spring</option>
              <option value="react">React</option>
            </select>
            <MonacoEditor
              value={code}
              // language={selectedLanguage}
              theme="vs-light"
              width="95%"
              height="98%"
              options={{
                selectOnLineNumbers: true,
                fontFamily:
                  'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                fontSize: 12,
                readOnly: true,
              }}
            />
          </div>
          <EndIndex />
          <span className="pl-3 text-text-color text-2xl">CODE</span>
        </div>
      </div>
    </div>
  );
}

export default PrivateAnsCheckPage;
