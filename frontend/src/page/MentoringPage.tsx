import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import QuesNavBar from 'components/QuesNavBar';
import Tag from 'components/Tag';
import TitleIndex from 'components/Index/AnsTitleIndex';
import ContentIndex from 'components/Index/ContentIndex';
import Btn from 'components/Btn';
import { useNavigate } from 'react-router-dom';
import PrivateCodeEditor from 'components/Editor/CodeEditor';
// import voice from 'images/voice.png';
// import screen from 'images/screen.png';
// import record from 'images/record.png';

// 과외 질문 멘토링 중인 페이지
function MentoringPage() {
  const navigate = useNavigate();
  const goToAnsCheckPage = () => {
    navigate('/privateanscheckpage');
  };

  return (
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
      {/* 음성 채팅, 화면 공유, 기록 -> 추가 기능 */}
      {/* <div className="flex justify-center item-center my-8"> */}
      {/* <div>
          <button type="button">
            <img className="w-13 h-10" src={voice} alt="Record" />
          </button>
          <button type="button">
            <img className="w-13 h-10" src={screen} alt="Record" />
          </button>
          <button type="button">
            <img className="w-13 h-10" src={record} alt="Record" />
          </button>
        </div> */}
      {/* </div> */}
      {/* Content */}
      <div className="flex justify-center item-center my-8">
        <div className="relative flex flex-col-reverse w-3/5">
          {/* 코드 에디터 */}
          <div className="flex justify-center item-center mb-8">
            <div className="relative flex flex-col-reverse w-full">
              <div className="rounded-xl h-[20rem] w-full mx-1 my-2 pt-1.5 px-1 bg-white border-4 border-violet-300">
                <PrivateCodeEditor />
              </div>
            </div>
          </div>
          {/* contnet index */}
          <ContentIndex />
          <span className="pl-3 text-text-color text-2xl">CONTENT</span>
        </div>
      </div>
      {/* finish button */}
      <div className="flex justify-center item-center my-8">
        <Btn text="FINISH" onClick={goToAnsCheckPage} />
      </div>
    </div>
  );
}

export default MentoringPage;
