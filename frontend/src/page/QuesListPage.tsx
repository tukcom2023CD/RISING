import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import QuesNavBar from 'components/QuesNavBar';
import Ques from 'components/Ques';
import Btn from 'components/Btn';

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
        <div className="relative flex flex-col my-6 w-4/5 h-[33rem]">
          <div className="absolute -top-6 right-4 mx-1 p-1">
            <Btn text="FILTER" />
          </div>
          <div className="my-4 overflow-y-auto w-full h-[40rem]">
            <div className="flex flex-col p-1">
              <Ques count={2} title="질문 제목1" date="2023-01-04" />
              <Ques count={1} title="질문 제목2" date="2023-01-05" />
              <Ques count={4} title="질문 제목3" date="2023-01-06" />
              <Ques count={3} title="질문 제목4" date="2023-01-07" />
              <Ques count={6} title="질문 제목5" date="2023-01-08" />
              <Ques count={2} title="질문 제목6" date="2023-01-08" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuesListPage;
