import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import icon1 from 'images/icon1.png';
import icon2 from 'images/icon2.png';
import { useNavigate } from 'react-router-dom';

function BeforeMainPage() {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };
  const goToSignUp = () => {
    navigate('/signup');
  };

  return (
    <div
      className="h-screen relative"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      <div className="flex justify-center items-center h-full">
        <div className="flex justify-center items-center flex-col">
          <div className="w-40 h-12 rounded-xl items-center drop-shadow-lg flex justify-center bg-[#E1E0FF] absolute top-36">
            <span className="text-2xl text-[#595959]">질문 리스트</span>
          </div>
          <span className="text-6xl text-[#575757]">
            코딩, 누구에게 물어보지?
          </span>
          <div className="rounded-full drop-shadow-lg bg-[#FFB0B0] w-52 h-16 flex justify-center items-center mt-8">
            <span className="text-white text-5xl">A - HA !</span>
          </div>
        </div>
      </div>
      <img
        src={icon1}
        alt="코딩말풍선"
        className="absolute top-28 left-28 w-46 h-40 scaleup"
      />
      <img
        src={icon2}
        alt="터미널"
        className="absolute top-40 right-36 w-40 h-36 scaleup"
      />
      <div className="w-32 h-12 rounded-xl items-center drop-shadow-lg flex justify-center bg-[#E1E0FF] absolute bottom-[22rem] left-36">
        <span className="text-2xl text-[#595959]">에러 해결</span>
      </div>
      <div className="w-32 h-12 rounded-xl items-center drop-shadow-lg flex justify-center bg-[#E1E0FF] absolute bottom-72 right-36">
        <span className="text-2xl text-[#595959]">개념 질문</span>
      </div>
      <button type="button" onClick={goToLogin}>
        <div className="scaleup w-32 h-12 rounded-xl items-center drop-shadow-lg flex justify-center bg-[#FFDDDD] absolute bottom-40 left-[40rem]">
          <span className="text-2xl text-[#595959]">로그인</span>
        </div>
      </button>
      <button type="button" onClick={goToSignUp}>
        <div className="scaleup w-32 h-12 rounded-xl items-center drop-shadow-lg flex justify-center bg-[#FFDDDD] absolute bottom-40 right-[40rem]">
          <span className="text-2xl text-[#595959]">회원가입</span>
        </div>
      </button>
    </div>
  );
}

export default BeforeMainPage;
