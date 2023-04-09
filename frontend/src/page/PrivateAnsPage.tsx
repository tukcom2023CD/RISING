/* eslint-disable no-alert */
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
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import useCopyClipBoard from 'utils/useCopyClipBoard';

function PrivateAnsPage() {
  const location = useLocation();
  const state = location.state as {
    id: number;
  };
  const postId = state.id;

  const navigate = useNavigate();
  window.localStorage.setItem('postId', `${postId}`);
  const goToChatPage = () => {
    // navigate(`/queschatpage`);
    alert('배포환경에서의 안정화 진행중입니다.');

    (async () => {
      await axios
        .post(`/api/v1/chatrooms/${postId}`)
        .then((res) => {
          console.log(res.data.data);
          if (res.data.data === false) {
            alert('멘티입니다.');
            navigate('/queslistpage');
          } else {
            setMentee(res.data.data.mentee.name);
            setMentor(res.data.data.mentor.name);
            setMenteeId(res.data.data.mentee.id);
            setMentorId(res.data.data.mentor.id);
            setRoomId(res.data.data.id);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  };

  const goToMentoring = () => {
    navigate(`/mentoringpage`);
  };

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState(0);
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState('');

  const [mentee, setMentee] = useState('');
  const [mentor, setMentor] = useState('');
  const [menteeId, setMenteeId] = useState(0);
  const [mentorId, setMentorId] = useState(0);
  const [roomId, setRoomId] = useState(0);

  console.log(mentee);
  localStorage.setItem('mentee', `${mentee}`);
  localStorage.setItem('mentor', `${mentor}`);
  localStorage.setItem('menteeId', `${menteeId}`);
  localStorage.setItem('mentorId', `${mentorId}`);
  localStorage.setItem('sender', `${userId}`);
  localStorage.setItem('roomId', `${roomId}`);

  useEffect(() => {
    (async () => {
      await axios
        .get(`/api/v1/posts/${postId}`)
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

  const [isCopy, onCopy] = useCopyClipBoard();
  const handleCopyClipBoard = (text: string) => {
    onCopy(text);
    console.log(isCopy);
    // navigate(`/mentoringpage`);
    window.localStorage.setItem('postId', `${postId}`);
  };

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
      <div className="flex justify-center item-center mt-8">
        <div className="relative flex flex-col-reverse w-3/5">
          {/* 코드 에디터 */}
          <div className="flex justify-center item-center mb-8">
            <div className="relative flex flex-col-reverse w-full">
              <div className="flex flex-col rounded-xl h-full w-full mx-1 my-2 pt-1.5 px-1 bg-white border-4 border-violet-300">
                <div className="pl-3">
                  <EditorViewer content={content} />
                </div>
              </div>
            </div>
          </div>
          <ContentIndex />
          <span className="pl-3 text-text-color text-2xl">CONTENT</span>
        </div>
      </div>
      {/* 채팅, 링크 버튼 */}
      <div className="flex justify-center item-center my-4">
        <div className="w-3/5 flex flex-row-reverse">
          <div className="mr-2">
            <Btn text="MENTORING" onClick={goToMentoring} />
          </div>
          <div className="mr-2">
            <button
              type="button"
              className="h-8 w-16 rounded-lg bg-violet-200 hover:bg-violet-300"
              onClick={() => {
                handleCopyClipBoard(`http://${process.env.REACT_APP_HOST}/mentoringpage`);
              }}
            >
              <span className="text-white text-sm mx-4">LINK</span>
            </button>
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
