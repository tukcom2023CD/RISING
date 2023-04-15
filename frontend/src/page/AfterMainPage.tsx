/* eslint-disable no-alert */
/* eslint-disable prefer-const */
import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import icon1 from 'images/icon1.png';
import icon2 from 'images/icon2.png';
import icon3 from 'images/icon3.png';
import mentee from 'images/mentee.png';
import mentor from 'images/mentor.png';
import { useNavigate } from 'react-router-dom';

function AfterMainPage() {
  const navigate = useNavigate();
  const goToQues = () => {
    navigate('/quespage');
  };
  const goToPrivateQues = () => {
    navigate('/privatequespage');
  };
  const goToQuesList = () => {
    navigate('/queslistpage');
  };
  const goToMyChatlist = () => {
    navigate('/mypage');
  };

  return (
    <div
      className="h-screen relative"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      <div className="flex justify-center items-center h-full">
        <div className="flex justify-center items-center flex-col">
          <span className="lg:text-6xl md:text-4xl sm:text-2xl text-[#575757]">
            코딩, 누구에게 물어보지?
          </span>
          <div className="rounded-full drop-shadow-lg bg-[#FFB0B0] lg:w-52 lg:h-16 md:w-36 md:h-10 sm:w-28 flex justify-center items-center mt-8 animate-pulse">
            <span className="text-white lg:text-5xl md:text-3xl sm:text-xl">
              A - HA !
            </span>
          </div>
          <div className="flex-row lg:mt-24 md:mt-12 sm:mt-8">
            <button
              type="button"
              className="lg:mx-8 md:mx-4 sm:mx-2"
              onClick={goToQues}
            >
              <div className="scaleup lg:w-36 lg:h-12 md:w-32 md:h-10 sm:w-28 sm:h-8 rounded-xl items-center drop-shadow-lg flex justify-center bg-[#E1E0FF]">
                <span className="lg:text-2xl md:text-xl sm:text-lg text-[#595959]">
                  질문 작성
                </span>
              </div>
            </button>
            <button
              type="button"
              className="lg:mx-8 md:mx-4 sm:mx-2"
              onClick={goToPrivateQues}
            >
              <div className="scaleup lg:w-36 lg:h-12 md:w-32 md:h-10 sm:w-28 sm:h-8 rounded-xl items-center drop-shadow-lg flex justify-center bg-[#E1E0FF]">
                <span className="lg:text-2xl md:text-xl sm:text-lg text-[#595959]">
                  멘토링
                </span>
              </div>
            </button>
            <button
              type="button"
              className="lg:mx-8 md:mx-4 sm:mx-2"
              onClick={goToQuesList}
            >
              <div className="scaleup lg:w-40 lg:h-12 md:w-36 md:h-10 sm:w-32 sm:h-8 rounded-xl items-center drop-shadow-lg flex justify-center bg-[#E1E0FF]">
                <span className="lg:text-2xl md:text-xl sm:text-lg text-[#595959]">
                  질문 리스트
                </span>
              </div>
            </button>
            <button
              type="button"
              className="lg:mx-8 md:mx-4 sm:mx-2"
              onClick={goToMyChatlist}
            >
              <div className="scaleup lg:w-36 lg:h-12 md:w-32 md:h-10 sm:w-28 sm:h-8 rounded-xl items-center drop-shadow-lg flex justify-center bg-[#FFDDDD]">
                <span className="lg:text-2xl md:text-xl sm:text-lg text-[#595959]">
                  내 채팅방
                </span>
              </div>
            </button>
          </div>
          <img
            src={icon3}
            alt="code"
            className="animate-wiggle absolute lg:bottom-20 md:bottom-16 sm:bottom-12 lg:w-44 md:w-36 sm:w-32"
          />
        </div>
      </div>
      <img
        src={icon1}
        alt="코딩말풍선"
        className="animate-bounce absolute lg:top-28 lg:left-28 md:top-24 md:left-20 sm:top-20 sm:left-20 lg:w-48 lg:h-40 md:w-32 md:h-24 sm:w-24 sm:h-20"
      />
      <img
        src={icon2}
        alt="터미널"
        className="animate-bounce absolute lg:top-40 lg:right-36 md:top-32 sm:top-20 sm:right-16 md:right-28 lg:w-40 lg:h-36 md:w-28 md:h-24 sm:w-24 sm:h-20"
      />
      <img
        src={mentee}
        alt="mentee"
        className="absolute bottom-0 left-0 lg:w-44 lg:h-44 md:w-36 md:h-36 sm:w-28 sm:h-28 max-sm:w-20 max-sm:h-20"
      />
      <img
        src={mentor}
        alt="mentor"
        className="absolute bottom-0 right-0 lg:w-44 lg:h-44 md:w-36 md:h-36 sm:w-28 sm:h-28 max-sm:w-28 max-sm:h-28"
      />
    </div>
  );
}

export default AfterMainPage;
