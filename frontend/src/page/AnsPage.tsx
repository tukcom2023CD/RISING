import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import QuesNavBar from 'components/NavBar/QuesNavBar';
import Tag from 'components/Tags/Tag';
import Date from 'components/Tags/Date';
import TitleIndex from 'components/Index/AnsTitleIndex';
import ContentIndex from 'components/Index/ContentIndex';
import AnswerIndex from 'components/Index/AnswerIndex';
import Ans from 'components/Ans/Ans';
import ReAns from 'components/Ans/ReAns';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import EditorViewer from 'components/Editor/EditorViewer';

// 질문 답변 및 확인 페이지
function AnsPage() {
  const location = useLocation();
  const state = location.state as { id: number };
  const postId = state.id;

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
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
          setContent(res.data.data.content);
          setUserId(res.data.data.userId);
          setTags(res.data.data.tags);
          setDate(res.data.data.created_at);
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, []);

  return (
    // 배경색
    <div
      className="h-screen"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      {/* 상단바 */}
      <QuesNavBar />
      {/* Title */}
      <div className="flex justify-center item-center my-8">
        <div className="relative flex flex-col-reverse w-3/5">
          <div className="flex flex-col rounded-xl h-28 w-full mx-1 my-2 bg-white border-4 border-violet-300">
            {/* 질문 제목 텍스트로 가져와야함 */}
            <span className="text-text-color text-xl mt-4 mx-4">{title}</span>
            <div className="my-2 pl-2 flex flex-row relative">
              {tags.map((tag: any) => (
                <Tag key={Math.random() * 500} text={tag} />
              ))}
              <div className="absolute top-0 right-0">
                <Date date={date} />
              </div>
            </div>
          </div>
          {/* title index */}
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
                  <div className="pl-3 pt-2">
                    <EditorViewer content={content} />
                  </div>
                </div>
              </div>
            </div>
          {/* content index */}
          <ContentIndex />
          <span className="pl-3 text-text-color text-2xl">CONTENT</span>
        </div>
      </div>
      {/* Answer */}
      <div className="flex justify-center item-center my-8">
        <div className="relative flex flex-col-reverse w-3/5">
          <div className="flex flex-col rounded-xl h-14 w-full mx-1 my-2 bg-white border-4 border-violet-300">
            <div className="pr-8 w-full items-center">
              {/* 답변 작성 */}
              <div className="relative">
                <input
                  type="text"
                  className="absolute top-1 left-4 w-full h-10 rounded-lg focus:shadow focus:outline-none"
                  placeholder="Answer"
                />
                {/* 답변 제출, 밑에 전달 */}
                <div className="absolute top-2 right-0">
                  <button
                    type="button"
                    className="h-8 w-20 rounded-lg bg-violet-200 hover:bg-violet-300"
                  >
                    <span className="text-white text-xs">SUBMIT</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* answer index */}
          <AnswerIndex />
          <span className="pl-3 text-text-color text-2xl">ANSWER</span>
        </div>
      </div>
      {/* 답변 댓글들 */}
      <div className="flex justify-center item-center mt-8">
        <div className="flex flex-col w-3/5">
          <Ans person="사람1" ans="첫번째 답변입니다." date="2023-01-04" />
          <ReAns person="사람3" ans="첫번째 대댓글입니다." date="2023-01-04" />
          <Ans person="사람2" ans="비공개 답변입니다." date="2023-01-05" />
        </div>
      </div>
      {/* 답변 댓글 끝 */}
    </div>
  );
}

export default AnsPage;


