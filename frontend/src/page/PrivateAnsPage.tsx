import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import QuesNavBar from 'components/NavBar/QuesNavBar';
import Tag from 'components/Tags/Tag';
import Date from 'components/Tags/Date';
import TitleIndex from 'components/Index/AnsTitleIndex';
import ContentIndex from 'components/Index/ContentIndex';
import EditorViewer from 'components/Editor/EditorViewer';
import Btn from 'components/Btn';
import { useLocation, useNavigate } from 'react-router-dom';
import useCopyClipBoard from 'utils/useCopyClipBoard';
import { useEffect, useState } from 'react';
import axios from 'axios';

// 과외 질문에 채팅과 링크 보낼 수 있는 페이지
function PrivateAnsPage() {
  const location = useLocation();
  const state = location.state as { id: number };
  const postId = state.id;

  const navigate = useNavigate();
  const goToChatPage = () => {
    navigate('/queschatpage', { state: { id: postId } });
  };

  const [isCopy, onCopy] = useCopyClipBoard();
  // 버튼 클릭시 백엔드로 게시글 id에 맞는 url api 요청해야함.
  const handleCopyClipBoard = (text: string) => {
    onCopy(text);
    console.log(isCopy);
    navigate('/mentoringpage', { state: { id: postId } });
  };

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
    <div
      className="h-screen"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
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
          {/* Record video index */}
          <ContentIndex />
          <span className="pl-3 text-text-color text-2xl">CONTENT</span>
        </div>
      </div>
      {/* 채팅, 링크 버튼 */}
      <div className="flex justify-center item-center my-8">
        <div className="w-3/5 flex flex-row-reverse">
          <div className="mx-1">
            <Btn
              text="LINK"
              onClick={() => {
                handleCopyClipBoard(`http://localhost:3000/mentoringpage`);
              }}
            />
          </div>
          <div className="mr-2">
            {/* 유저 아이디 받아서 채팅페이지에서 자신으로 설정해야함 */}
            <Btn text="CHAT" onClick={goToChatPage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivateAnsPage;
