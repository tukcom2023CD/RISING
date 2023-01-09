import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import NavBar from 'components/NavBar';

function LoginPage() {
  return (
    <div
      className="h-screen"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      {/* 상단바 */}
      <NavBar />
      {/* 로그인 틀 */}
      <div className="flex justify-center item-center my-8 mt- h-2/5">
        <div className="w-3/5 bg-white drop-shadow-lg item-center pr-2">
          <div className="flex flex-col rounded-xl h-14 w-full mx-1 my-3 bg-white border-4 border-violet-300">
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
