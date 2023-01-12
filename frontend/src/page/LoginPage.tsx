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
      <div className=" mt-36 flex justify-center item-center my-8 mt- h-2/5">
        <div className="w-2/5 bg-white drop-shadow-lg item-center pr-2">
          <div className="mt-16 flex flex-col rounded-xl h-14 w-full mx-1 my-3 bg-white border-4 border-violet-300">
            {}
          </div>
          <div className="mt-8 flex flex-col rounded-xl h-14 w-full mx-1 my-3 bg-white border-4 border-violet-300">
            {}
          </div>
          <div className='mt-6 grid place-items-center'>
            <Button text="Login" onClick={goToMain}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
