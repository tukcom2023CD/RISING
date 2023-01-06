import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import QuesNavBar from 'components/QuesNavBar';
import Ques from 'components/Ques';

// 질문 리스트 페이지
function QuesListPage() {
  return (
    // 배경색
    <div
      className="h-screen"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      {/* 상단바 */}
      <QuesNavBar />
      <div className="flex justify-center item-center my-8">
        <div className="flex flex-col w-3/5">
          <Ques count={2} title="질문 제목" />
        </div>
      </div>
    </div>
  );
}

export default QuesListPage;
