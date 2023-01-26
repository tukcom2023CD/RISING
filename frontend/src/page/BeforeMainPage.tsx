/* eslint-disable prefer-const */
import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import icon1 from 'images/icon1.png';
import icon2 from 'images/icon2.png';
import mentee from 'images/mentee.png';
import mentor from 'images/mentor.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function BeforeMainPage() {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };
  const goToSignUp = () => {
    navigate('/signup');
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
    }, 300);

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
          <div className="animate-wiggle w-40 h-12 rounded-xl items-center drop-shadow-lg flex justify-center bg-[#E1E0FF] absolute top-36">
            <span className="text-2xl text-[#595959]">질문 리스트</span>
          </div>
          <span className="text-6xl text-[#575757] animate-typingCursor">
            {title}
          </span>
          <div className="rounded-full drop-shadow-lg bg-[#FFB0B0] w-52 h-16 flex justify-center items-center mt-8 animate-pulse">
            <span className="text-white text-5xl">A - HA !</span>
          </div>
          <div className="flex-row absolute bottom-36">
            <button type="button" onClick={goToLogin}>
              <div className="scaleup w-32 h-12 rounded-xl items-center drop-shadow-lg flex justify-center bg-[#FFDDDD] mx-16">
                <span className="text-2xl text-[#595959]">로그인</span>
              </div>
            </button>
            <button type="button" onClick={goToSignUp}>
              <div className="scaleup w-32 h-12 rounded-xl items-center drop-shadow-lg flex justify-center bg-[#FFDDDD] mx-16">
                <span className="text-2xl text-[#595959]">회원가입</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <img
        src={icon1}
        alt="코딩말풍선"
        className="absolute top-28 left-28 w-46 h-40"
      />
      <img
        src={icon2}
        alt="터미널"
        className="absolute top-40 right-36 w-40 h-36"
      />
      <div className="animate-move-right w-32 h-12 rounded-xl items-center drop-shadow-lg flex justify-center bg-[#E1E0FF] absolute bottom-[22rem] left-36">
        <span className="text-2xl text-[#595959]">에러 해결</span>
      </div>
      <div className="animate-move-left w-32 h-12 rounded-xl items-center drop-shadow-lg flex justify-center bg-[#E1E0FF] absolute bottom-72 right-36">
        <span className="text-2xl text-[#595959]">개념 질문</span>
      </div>
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

export default BeforeMainPage;
