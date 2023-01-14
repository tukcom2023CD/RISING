import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import NavBar from 'components/NavBar';
import Button from 'components/LoginBtn';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/mainpage');
  };
  return (
    <div
      className="h-screen"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      {/* 상단바 */}
      <NavBar />
      {/* 로그인 틀 */}
      <div className="mt-52 flex justify-center item-center my-8 h-64">
        <div className="w-2/5 bg-white drop-shadow-lg item-center px-4 pr-5">
          <div className="mt-8 flex flex-col rounded-xl h-14 w-full mx-1 my-3 bg-white border-4 border-violet-300">
            <input
              className="h-9 m-1 placeholder-[#9CA6C5]"
              placeholder="Email Address"
            />
          </div>
          <div className="mt-8 flex flex-col rounded-xl h-14 w-full mx-1 my-3 bg-white border-4 border-violet-300">
            <input
              className="h-9 m-1 placeholder-[#9CA6C5]"
              placeholder="Password"
            />
          </div>
          <div className="mt-6 grid place-items-center">
            <Button text="Login" onClick={goToMain} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
