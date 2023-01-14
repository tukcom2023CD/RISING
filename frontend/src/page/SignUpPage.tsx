import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import NavBar from 'components/NavBar';
import Button from 'components/LoginBtn';
import { useNavigate } from 'react-router-dom';
import BasicProfile from 'images/BasicProfile.png';

function SignUpPage() {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };
  return (
    <div
      className="h-screen"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      {/* 상단바 */}
      <NavBar />
      {/* 회원가입 틀 */}
      <div className="mt-36 flex justify-center item-center my-8 h-[23rem]">
        <div className="w-3/5 flex flex-row bg-white drop-shadow-lg item-center pr-6">
          {/* 유저 기본 사진 */}
          <div className="m-6 mt-8">
            <img src={BasicProfile} alt="기본사진" />
          </div>
          {/* 유저 정보 기입 */}
          <div className="relative flex flex-col w-4/5">
            <div className="mt-8 rounded-xl h-12 w-full pr-2 mx-1 my-3 bg-white border-4 border-violet-300">
              <input
                className="h-9 m-1 w-full placeholder-[#9CA6C5]"
                placeholder="Nickname"
              />
            </div>
            <div className="mt-2 rounded-xl h-12 w-full pr-2 mx-1 my-3 bg-white border-4 border-violet-300">
              <input
                className="h-9 m-1 w-full placeholder-[#9CA6C5]"
                placeholder="Email Address"
              />
            </div>
            <div className="mt-2 rounded-xl h-12 w-full pr-2 mx-1 my-3 bg-white border-4 border-violet-300">
              <input
                className="h-9 m-1 w-full placeholder-[#9CA6C5]"
                placeholder="Password"
              />
            </div>
            <div className="mt-2 rounded-xl h-12 w-full pr-2 mx-1 my-3 bg-white border-4 border-violet-300">
              <input
                className="h-9 m-1 w-full placeholder-[#9CA6C5]"
                placeholder="Check Password"
              />
            </div>
            <div className="mt-4 mb-2 grid absolute bottom-4 right-0">
              <Button text="다음" onClick={goToLogin} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
