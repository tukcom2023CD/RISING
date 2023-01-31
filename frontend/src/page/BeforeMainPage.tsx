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
          <div className="animate-wiggle absolute lg:top-36 md:top-32 sm:top-28 lg:w-40 lg:h-12 md:w-36 md:h-10 sm:w-32 sm:h-8 rounded-xl items-center drop-shadow-lg flex justify-center bg-[#E1E0FF]">
            <span className="lg:text-2xl md:text-xl sm:text-lg text-[#595959]">
              질문 리스트
            </span>
          </div>
          <span className="lg:text-6xl md:text-4xl sm:text-2xl text-[#575757] animate-typingCursor">
            {title}
          </span>
          <div className="rounded-full drop-shadow-lg bg-[#FFB0B0] lg:w-52 lg:h-16 md:w-36 md:h-10 sm:w-28 flex justify-center items-center mt-8 animate-pulse">
            <span className="text-white lg:text-5xl md:text-3xl sm:text-xl">
              A - HA !
            </span>
          </div>
          <div className="flex-row absolute lg:bottom-36 sm:bottom-24">
            <button type="button" onClick={goToLogin}>
              <div className="scaleup lg:w-32 lg:h-12 md:w-28 md:h-10 sm:w-24 sm:h-8 rounded-xl items-center drop-shadow-lg flex justify-center bg-[#FFDDDD] lg:mx-16 sm:mx-4">
                <span className="lg:text-2xl md:text-xl sm:text-lgtext-[#595959]">
                  로그인
                </span>
              </div>
            </button>
            <button type="button" onClick={goToSignUp}>
              <div className="scaleup lg:w-32 lg:h-12 md:w-28 md:h-10 sm:w-24 sm:h-8 rounded-xl items-center drop-shadow-lg flex justify-center bg-[#FFDDDD] lg:mx-16 sm:mx-4">
                <span className="lg:text-2xl md:text-xl sm:text-lg text-[#595959]">
                  회원가입
                </span>
              </div>
            </button>
          </div>
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
      <div className="animate-move-right absolute lg:bottom-[22rem] lg:left-36 md:bottom-72 md:left-20 sm:bottom-60 sm:left-16 lg:w-32 lg:h-12 md:w-28 md:h-10 sm:w-24 sm:h-8 rounded-xl items-center drop-shadow-lg flex justify-center bg-[#E1E0FF]">
        <span className="lg:text-2xl md:text-xl sm:text-lg text-[#595959]">
          에러 해결
        </span>
      </div>
      <div className="animate-move-left absolute lg:bottom-72 lg:right-36 md:bottom-64 md:right-20 sm:bottom-56 sm:right-16 lg:w-32 lg:h-12 md:w-28 md:h-10 sm:w-24 sm:h-8 rounded-xl items-center drop-shadow-lg flex justify-center bg-[#E1E0FF]">
        <span className="lg:text-2xl md:text-xl sm:text-lg text-[#595959]">
          개념 질문
        </span>
      </div>
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

export default BeforeMainPage;
