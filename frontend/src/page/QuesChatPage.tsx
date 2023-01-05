import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import MentoNavBar from 'components/MentoNavBar';
import Tag from 'components/Tag';
import send from 'images/send.png';

function QuesChatPage() {
  return (
    // 배경색
    <div
      className="h-screen"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      {/* 상단바 */}
      <MentoNavBar />
      <div className="flex justify-center item-center my-8">
        {/* Title */}
        <div className="relative flex flex-col w-3/5">
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
        </div>
      </div>
      {/* 채팅방 */}
      <div className="flex justify-center item-center my-8">
        <div className="relative flex-row w-3/5 h-96 rounded-xl bg-white">
          <div className="absolute bottom-1 left-1 bg-gray-200 w-full">
            <input
              className="absolute bottom-1 left-1 w-full h-10 pr-6"
              type="text"
              placeholder="Chat"
            />
          </div>
          <button type="button">
            <img className="absolute bottom-1 right-1" src={send} alt="send" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuesChatPage;
