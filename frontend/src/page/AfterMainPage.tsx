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
import { useEffect, useState } from 'react';

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

  const completionWord = ', 누구에게 물어보지?';
  const [title, setTitle] = useState('코딩');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTitle((preTitleValue) => {
        let result = preTitleValue
          ? preTitleValue + completionWord[count]
          : completionWord[0];
        setCount(count + 1);

        if (count >= completionWord.length) {
          setCount(0);
          setTitle('코딩');
        }
        return result;
      });
    }, 200);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <div
      className="h-screen relative"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      <div className="flex justify-center items-center h-full">
        <div className="flex justify-center items-center flex-col">
          <span className="animate-typingCursor text-6xl text-[#575757]">
            {title}
          </span>
          <div className="animate-pulse rounded-full drop-shadow-lg bg-[#FFB0B0] w-52 h-16 flex justify-center items-center mt-8">
            <span className="text-white text-5xl">A - HA !</span>
          </div>
          <div className="flex-row mt-24">
            <button type="button" className="mx-8" onClick={goToQues}>
              <div className="scaleup w-36 h-12 rounded-xl items-center drop-shadow-lg flex justify-center bg-[#E1E0FF]">
                <span className="text-2xl text-[#595959]">질문 작성</span>
              </div>
            </button>
            <button type="button" className="mx-8" onClick={goToPrivateQues}>
              <div className="scaleup w-36 h-12 rounded-xl items-center drop-shadow-lg flex justify-center bg-[#E1E0FF]">
                <span className="text-2xl text-[#595959]">멘토링</span>
              </div>
            </button>
            <button type="button" className="mx-8" onClick={goToQuesList}>
              <div className="scaleup w-40 h-12 rounded-xl items-center drop-shadow-lg flex justify-center bg-[#E1E0FF]">
                <span className="text-2xl text-[#595959]">질문 리스트</span>
              </div>
            </button>
            <button type="button" className="mx-8" onClick={goToMyChatlist}>
              <div className="scaleup w-36 h-12 rounded-xl items-center drop-shadow-lg flex justify-center bg-[#FFDDDD]">
                <span className="text-2xl text-[#595959]">내 채팅방</span>
              </div>
            </button>
          </div>
          <img
            src={icon3}
            alt="code"
            className="absolute bottom-20 w-44 scaleup animate-wiggle"
          />
        </div>
      </div>
      <img
        src={icon1}
        alt="코딩말풍선"
        className="absolute top-28 left-28 w-46 h-40 scaleup animate-bounce"
      />
      <img
        src={icon2}
        alt="터미널"
        className="absolute top-40 right-36 w-40 h-36 scaleup animate-bounce"
      />
      <img
        src={mentee}
        alt="mentee"
        className="absolute bottom-0 left-0 w-44 h-44"
      />
      <img
        src={mentor}
        alt="mentor"
        className="absolute bottom-0 right-0 w-44 h-44"
      />
    </div>
  );
}

export default AfterMainPage;
