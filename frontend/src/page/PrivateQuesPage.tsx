import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import PrivateQuesNavBar from 'components/NavBar/PrivateQuesNavBar';
import KeywordSelect from 'components/Select/KeywordSelect';
import Btn from 'components/Btn';
import TitleIndex from 'components/Index/QuesTitleIndex';
import ContentIndex from 'components/Index/EndIndex';
import KeywordIndex from 'components/Index/KeywordIndex';
import { useNavigate } from 'react-router-dom';
import ToastEditor from 'components/Editor/ToastEditor';
import { useRef, useState } from 'react';
import axios from 'axios';

interface privateQuesForm {
  type: string;
  title: string;
  tags: string[];
  content: string | null;
}

// 질문 작성 페이지
function PrivateQuesPage() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/mainpage');
  };

  const ref = useRef<any>(null);

  const [text, setText] = useState('');
  const [keyWord, setKeyWord] = useState([]);

  const handleSubmit = (e: any) => {
    e.preventDefault(); // 새로고침 방지
    const editorIns = ref?.current?.getInstance();
    // 에디터 작성 내용 markdown으로 저장
    const contentMark = editorIns.getMarkdown();
    const privateQuesData: privateQuesForm = {
      type: 'MENTORING',
      title: text,
      tags: keyWord,
      content: contentMark,
    };
    console.log(privateQuesData);
    (async () => {
      await axios
        .post(`/posts`, privateQuesData, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          console.log(res.data);
          console.log(keyWord);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    })();
  };
  const onChangeKeyWord = async (e: any) => {
    const keyWordList: any = e;
    const result: any = keyWordList.map((data: any) => data.value);
    setKeyWord(result);
  };

  return (
    // 배경색
    <div
      className="h-screen"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      {/* 상단바 */}
      <PrivateQuesNavBar />
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="flex justify-center item-center my-8">
          <div className="relative flex flex-col-reverse w-3/5">
            <div className="flex flex-col rounded-xl h-16 w-full mx-1 my-2 pr-4 pt-1 bg-white border-4 border-violet-300">
              {/* 질문 제목 작성 */}
              <div className="relative">
                <input
                  type="text"
                  className="absolute top-1 left-2 w-full h-10 rounded-lg focus:shadow focus:outline-none"
                  placeholder="Title.."
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
              </div>
            </div>
            {/* title index */}
            <TitleIndex />
            <span className="pl-3 text-text-color text-2xl">TITLE</span>
          </div>
        </div>
        {/* Keyword */}
        <div className="flex justify-center item-center my-8">
          <div className="relative flex flex-col-reverse w-3/5">
            <div className="flex flex-col rounded-xl h-14 w-full mx-1 my-2 bg-white border-4 border-violet-300">
              {/* 키워드 작성 */}
              <div className="pt-1 px-1">
                <KeywordSelect onChange={onChangeKeyWord} />
              </div>
            </div>
            {/* keyword index */}
            <KeywordIndex />
            <span className="pl-3 text-text-color text-2xl">KEYWORD</span>
          </div>
        </div>
        {/* Content */}
        <div className="flex justify-center item-center my-8">
          <div className="relative flex flex-col-reverse w-3/5">
            {/* Content */}
            <div className="flex justify-center item-center mb-8">
              <div className="relative flex flex-col-reverse w-full">
                <div className="flex flex-col rounded-xl h-[20rem] w-full mx-1 my-2 pt-1.5 px-1 bg-white border-4 border-violet-300">
                  {/* 텍스트 편집기 */}
                  <ToastEditor editorRef={ref} />
                </div>
              </div>
            </div>
            {/* Record video index */}
            <ContentIndex />
            <span className="pl-3 text-text-color text-2xl">CONTENT</span>
          </div>
        </div>
        {/* Submit */}
        <div className="flex justify-center item-center my-8">
          <Btn text="SUBMIT" onClick={goToMain} />
        </div>
      </form>
    </div>
  );
}

export default PrivateQuesPage;
