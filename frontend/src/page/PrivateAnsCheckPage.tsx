import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import QuesNavBar from 'components/QuesNavBar';
import Tag from 'components/Tag';
import TitleIndex from 'components/Index/AnsTitleIndex';
import RecordIndex from 'components/Index/MiddleIndex';
import MemoIndex from 'components/Index/MemoIndex';

// 과외 질문의 답변 확인 페이지
function PrivateAnsCheckPage() {
  return (
    <div
      className="h-screen"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      <QuesNavBar />
      {/* Title */}
      <div className="flex justify-center item-center my-8">
        <div className="relative flex flex-col-reverse w-3/5">
          <div className="flex flex-col rounded-xl h-32 w-full mx-1 my-2 bg-white border-4 border-violet-300">
            {/* 질문 제목 텍스트로 가져와야함 */}
            <span className="text-text-color text-xl m-4">질문 제목</span>
            <div className="flex flex-row relative">
              <Tag text="# JavaScript" />
              <Tag text="# python" />
              <div className="absolute top-0 right-3">
                <Tag text="2023-01-04" />
              </div>
            </div>
          </div>
          {/* title index */}
          <TitleIndex />
          <span className="pl-3 text-text-color text-2xl">TITLE</span>
        </div>
      </div>
      {/* Record video */}
      <div className="flex justify-center item-center my-8">
        <div className="relative flex flex-col-reverse w-3/5">
          <div className="flex flex-col rounded-xl h-64 w-full mx-1 my-2 bg-white border-4 border-violet-300">
            <span className="text-text-color text-xl m-4">기록된 영상</span>
          </div>
          {/* Record video index */}
          <RecordIndex />
          <span className="pl-3 text-text-color text-2xl">RECORDED VIDEO</span>
        </div>
      </div>
      {/* Memo */}
      <div className="flex justify-center item-center my-8">
        <div className="relative flex flex-col-reverse w-3/5">
          <div className="flex flex-col rounded-xl h-64 w-full mx-1 my-2 bg-white border-4 border-violet-300">
            <div className="pr-8 w-full items-center">
              {/* 메모 작성 */}
              <div className="relative">
                <input
                  type="text"
                  className="absolute top-1 left-4 w-full h-10 rounded-lg focus:shadow focus:outline-none"
                  placeholder="Memo"
                />
              </div>
            </div>
          </div>
          {/* answer index */}
          <MemoIndex />
          <span className="pl-3 text-text-color text-2xl">MENTORING MEMO</span>
        </div>
      </div>
    </div>
  );
}

export default PrivateAnsCheckPage;
