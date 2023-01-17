import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import { useState } from 'react';
import ColorSystem from 'utils/ColorSystem';
import { useNavigate } from 'react-router-dom';
import QuesNavBar from 'components/NavBar/QuesNavBar';
import KeywordSelect from 'components/Select/KeywordSelect';
import TitleIndex from 'components/Index/QuesTitleIndex';
import ContentIndex from 'components/Index/EndIndex';
import KeywordIndex from 'components/Index/KeywordIndex';
import axios from 'axios';

interface QuesForm {
  type: string;
  title: string;
  tags: string[];
  content: string;
}
// 질문 작성 페이지
function QuesPage() {

  const navigate = useNavigate();
  const [titletext, setTitletext] = useState('');
  const [keyWord, setKeyWord] = useState([]);
  const [text, setText] = useState('');

  const handleSubmit = (e: any) => {
  e.preventDefault();
  const QuesData: QuesForm = {
    type: 'QUESTION',
    title: titletext,
    tags: keyWord,
    content: text,
  };
  console.log(QuesData);
  (async () => {
    await axios
      .post('http://localhost:8080/api/v1/posts', QuesData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        navigate('/mainpage');
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
      <QuesNavBar />
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
                  setTitletext(e.target.value);
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
              <div className="pt-1 px-1">
                <KeywordSelect onChange={onChangeKeyWord} />
              </div>
            <div className="pt-1 px-1">{/* <KeywordSelect /> */}</div>
          </div>
          {/* keyword index */}
          <KeywordIndex />
          <span className="pl-3 text-text-color text-2xl">KEYWORD</span>
        </div>
      </div>
      {/* Content */}
      <div className="flex justify-center item-center my-8">
        <div className="relative flex flex-col-reverse w-3/5">
          <div className="flex flex-col rounded-xl h-64 w-full pr-4 mx-1 my-2 bg-white border-4 border-violet-300">
            {/* 질문할 내용 작성 */}
            <div className="relative">
              <input
                type="text"
                className="absolute top-1 left-2 w-full h-10 rounded-lg focus:shadow focus:outline-none"
                placeholder="Content.."
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
            </div>
          </div>
          {/* Record video index */}
          <ContentIndex />
          <span className="pl-3 text-text-color text-2xl">CONTENT</span>
        </div>
      </div>
      {/* Submit */}
        <div className="flex justify-center item-center my-8">
          <button
            type="submit"
            className="h-8 w-20 rounded-lg bg-violet-200 hover:bg-violet-300"
          >
            <span className="text-white text-sm">SUBMIT</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default QuesPage;
