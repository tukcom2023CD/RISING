import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import TitleIndex from 'components/Index/QuesTitleIndex';
import MentoNavBar from 'components/MentoNavBar';

// 질문 작성 페이지
function QuesPage() {
  return (
    // 배경색
    <div
      className="h-screen"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      {/* 상단바 */}
      <MentoNavBar />
      {/* Title */}
      <div className="flex justify-center item-center my-8">
        <div className="relative flex flex-col-reverse w-3/5">
          <div className="flex flex-col rounded-xl h-20 w-full mx-1 my-2 bg-white border-4 border-violet-300">
            {/* 질문 제목 텍스트로 가져와야함 */}
            <span className="text-text-color text-xl m-4">질문 제목</span>
          </div>
          {/* title index */}
          <TitleIndex />
          <span className="pl-3 text-text-color text-2xl">TITLE</span>
        </div>
      </div>
    </div>
  );
}

export default QuesPage;
