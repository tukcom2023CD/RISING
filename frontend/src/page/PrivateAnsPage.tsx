/* eslint-disable no-alert */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable object-shorthand */
import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import QuesNavBar from 'components/NavBar/QuesListNavBar';
import Tag from 'components/Tags/Tag';
import Date from 'components/Tags/Date';
import TitleIndex from 'components/Index/AnsTitleIndex';
import ContentIndex from 'components/Index/ContentIndex';
import EditorViewer from 'components/Editor/EditorViewer';
import Btn from 'components/Btn';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import axios, { AxiosError } from 'axios';
import useCopyClipBoard from 'utils/useCopyClipBoard';
import { useDispatch, useSelector } from 'react-redux';
import ToastEditor from 'components/Editor/ToastEditor';
import { setUserName } from '../components/redux/userSlice';

interface QuesForm {
  type: string;
  title: string;
  content: string | null;
}

export type ChatError = {
  businessCode: string;
};

function PrivateAnsPage() {
  const location = useLocation();
  const state = location.state as {
    id: number;
    roomId: number;
  };
  const [postId, setPostId] = useState<number>(state.id);

  useEffect(() => {
    setPostId(state.id);
  }, [state.id]);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const goToChatPage = () => {
    (async () => {
      await axios
        .post(`/api/v1/chatrooms/${postId}`)
        .then((res) => {
          setMentee(res.data.data.mentee.name);
          setMentor(res.data.data.mentor.name);
          dispatch(setUserName(res.data.data.mentor.name));
          localStorage.setItem('roomId', `${res.data.data.id}`);
          localStorage.setItem('sender', `${res.data.data.mentee.name}`);
          navigate(`/queschatpage`, {
            state: { id: postId, roomId: `${res.data.data.id}` },
          });
        })
        .catch((error) => {
          if (
            (error as AxiosError<ChatError, undefined>).response?.data
              .businessCode === 'CR002'
          ) {
            alert('질문자는 마이페이지의 채팅방을 이용해주세요:)');
            navigate('/mypage');
          }
        });
    })();
  };

  const goToMentoring = () => {
    navigate(`/mentoringpage`);
  };

  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState('');

  const [isEditing, setIsEditing] = useState(false);

  const [mentee, setMentee] = useState('');
  const [mentor, setMentor] = useState('');

  localStorage.setItem('mentee', `${mentee}`);
  localStorage.setItem('mentor', `${mentor}`);

  useEffect(() => {
    (async () => {
      await axios
        .get(`/api/v1/posts/${postId}`)
        .then((res) => {
          console.log(res.data.data);
          setUserId(res.data.data.userId);
          setTitle(res.data.data.title);
          setContent(res.data.data.content);
          setTags(res.data.data.tags);
          setDate(res.data.data.created_at);
          localStorage.setItem('postId', `${postId}`);
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, [postId]);

  const [isCopy, onCopy] = useCopyClipBoard();
  const handleCopyClipBoard = (text: string) => {
    onCopy(text);
    console.log(isCopy);
    window.localStorage.setItem('postId', `${postId}`);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line prefer-destructuring
    const value = e.target.value;
    if (value.length <= 20) {
      setTitle(value);
    } else {
      setTitle(value.slice(0, 20));
    }
  };

  const ref = useRef<any>(null);

  const handleEditorChange = () => {
    setContent(ref.current.getInstance().getMarkdown());
  };

  const currUserId = useSelector((state: any) => state.user.userId);

  const modifyPost = () => {
    setIsEditing(true);
  };

  const putPost = () => {
    const editorIns = ref?.current?.getInstance();
    const contentMark = editorIns.getMarkdown();
    const QuesData: QuesForm = {
      type: 'QUESTION',
      title,
      content: contentMark,
    };
    (async () => {
      await axios
        .put(`/api/v1/posts/${postId}`, QuesData, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    })();
    alert('글이 수정되었습니다.');
    setIsEditing(false);
  };

  const deletePost = () => {
    (async () => {
      await axios
        .delete(`/api/v1/posts/${postId}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    })();
    alert('글이 삭제되었습니다.');
    navigate('/queslistpage');
  };

  return (
    <div
      className="h-screen"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      <QuesNavBar />
      {/* 수정, 삭제 버튼 */}
      {Number(userId) === currUserId && (
        <div className="flex justify-center item-center mt-4">
          <div className="w-3/5">
            <div className="flex flex-row w-fit ml-auto">
              <div className="mr-4">
                <Btn text="수정" onClick={modifyPost} />
              </div>
              {isEditing ? (
                <Btn text="완료" onClick={putPost} />
              ) : (
                <Btn text="삭제" onClick={deletePost} />
              )}
            </div>
          </div>
        </div>
      )}
      {/* Title */}
      <div className="flex justify-center item-center my-8">
        <div className="relative flex flex-col-reverse w-3/5">
          <div className="flex flex-col rounded-xl h-28 w-full mx-1 my-2 bg-white border-4 border-violet-300">
            <input
              disabled={!isEditing}
              type="text"
              className="text-text-color text-xl mt-4 mx-4 sm:text-sm md:text-lg lg:text-xl rounded-lg bg-white focus:shadow focus:outline-none"
              placeholder="Title.."
              value={title}
              onChange={handleTitleChange}
            />
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
                  {isEditing ? (
                    <ToastEditor
                      content={content}
                      editorRef={ref}
                      handleEditorChange={handleEditorChange}
                    />
                  ) : (
                    <EditorViewer content={content} />
                  )}
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
                handleCopyClipBoard(
                  `http://${process.env.REACT_APP_HOST}/mentoringpage`,
                );
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
