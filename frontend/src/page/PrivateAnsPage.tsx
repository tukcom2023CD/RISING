import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import QuesNavBar from 'components/QuesNavBar';
import Tag from 'components/Tag';
import TitleIndex from 'components/Index/AnsTitleIndex';
import ContentIndex from 'components/Index/ContentIndex';
import Btn from 'components/Btn';
import { useNavigate } from 'react-router-dom';
import ToastEditor from 'components/Editor/ToastEditor';
import useCopyClipBoard from 'utils/useCopyClipBoard';

// 과외 질문에 채팅과 링크 보낼 수 있는 페이지
function PrivateAnsPage() {
  const navigate = useNavigate();
  const goToChatPage = () => {
    navigate('/queschatpage');
  };

  const [isCopy, onCopy] = useCopyClipBoard();
  // 버튼 클릭시 백엔드로 게시글 id에 맞는 url api 요청해야함.
  const handleCopyClipBoard = (text: string) => {
    onCopy(text);
    console.log(isCopy);
    // 지금 여기로 들어감 수정 필요
    if (isCopy === false) {
      navigate(`/mentoringpage`);
    }
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
            {/* 질문 제목 텍스트로 가져와야함 */}
            <span className="text-text-color text-xl mt-4 mx-4">질문 제목</span>
            <div className="my-2 pl-2 flex flex-row relative">
              <Tag text="# JavaScript" />
              <Tag text="# python" />
              <div className="absolute top-0 right-1">
                <Tag text="2023-01-04" />
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
                <ToastEditor />
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
            <Btn text="CHAT" onClick={goToChatPage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivateAnsPage;
