/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable object-shorthand */
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
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

// 과외 질문에 채팅과 링크 보낼 수 있는 페이지
function PrivateAnsPage() {
  const location = useLocation();
  const state = location.state as {
    id: number;
  };
  const postId = state.id;

  const navigate = useNavigate();
  const goToChatPage = () => {
    navigate('/queschatpage', { state: { id: postId } });
  };

  const [isCopy, onCopy] = useCopyClipBoard();
  const handleCopyClipBoard = (text: string) => {
    onCopy(text);
    console.log(isCopy);
    navigate(`/mentoringpage`);
    window.localStorage.setItem('postId', `${postId}`);
  };

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState(0);
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState('');

  useEffect(() => {
    (async () => {
      await axios
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

  const [show, setShow] = useState(false);
  const target = useRef(null);

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
      <div className="flex justify-center item-center mt-8">
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
      <div className="flex justify-center item-center my-4">
        <div className="w-3/5 flex flex-row-reverse">
          <div className="mr-2">
            <Btn
              text="MENTORING"
              onClick={() => {
                navigate(`/mentoringpage`);
              }}
            />
          </div>
          <div className="mr-2">
            <button
              type="button"
              className="h-8 w-20 rounded-lg bg-violet-200 hover:bg-violet-300"
              ref={target}
              onClick={() => setShow(!show)}
            >
              <span className="text-white text-sm mx-4">LINK</span>
            </button>
            <Overlay target={target.current} show={show} placement="bottom">
              {(props) => (
                <Tooltip id="overlay-example" {...props}>
                  <p className="text-violet-400">
                    http://localhost:3000/mentoringpage
                  </p>
                </Tooltip>
              )}
            </Overlay>
          </div>
          <div className="mr-2">
            <Btn text="CHAT" onClick={goToChatPage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivateAnsPage;
