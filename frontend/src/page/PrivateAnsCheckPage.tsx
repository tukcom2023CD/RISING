import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import QuesNavBar from 'components/QuesNavBar';
import Tag from 'components/Tag';
import TitleIndex from 'components/Index/AnsTitleIndex';
import ToastEditor from 'components/Code/ToastEditor';
import ContentIndex from 'components/Index/ContentIndex';
import EndIndex from 'components/Index/EndIndex';

// 과외 질문 멘토링 이후 결과 확인하는 페이지
function PrivateAnsCheckPage() {
  return (
    <div
      className="h-full"
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
      {/* Recorded video */}
      <div className="flex justify-center item-center my-8">
        <div className="relative flex flex-col-reverse w-3/5">
          <div className="flex flex-col rounded-xl h-[20rem] w-full mx-1 my-2 bg-white border-4 border-violet-300">
            {/* 추후 구현 예정 */}
            <span className="text-text-color text-xl mt-4 mx-4">
              기록된 영상이 업로드 될 예정입니다.
            </span>
          </div>
          {/* recorded index */}
          <EndIndex />
          <span className="pl-3 text-text-color text-2xl">RECORDED VIDEO</span>
        </div>
      </div>
    </div>
  );
}

export default PrivateAnsCheckPage;
