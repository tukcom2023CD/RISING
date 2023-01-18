import ColorSystem from 'utils/ColorSystem';
import logo from 'images/logo.png';
import { useNavigate } from 'react-router-dom';

function QuesListNavBar() {
  const navigate = useNavigate();
  const goToQueslistPage = () => {
    navigate('/queslistpage');
  };
  const goToMain = () => {
    navigate('/mainpage');
  };
  const goToQues = () => {
    navigate('/quespage');
  };
  const goToPrivateQues = () => {
    navigate('/privatequespage');
  };
  const goToLogin = () => {
    navigate('/login');
  };
  const goToSignUp = () => {
    navigate('/signup');
  };
  return (
    <div className="w-full h-30 border-b-2 bg-white">
      <div className="flex flex-row">
        <button type="button" onClick={goToMain}>
          <img className="left-0 w-48 pl-12 pr-8 py-8" src={logo} alt="logo" />
        </button>
        <button
          type="button"
          className="text-xl pl-10 pr-8 py-8 my-2"
          onClick={goToQues}
        >
          질문 작성
        </button>
        <button
          type="button"
          className="text-xl pl-10 pr-8 py-8 my-2"
          onClick={goToPrivateQues}
        >
          멘토링 질문 작성
        </button>
        <button
          type="button"
          className="text-xl pl-10 pr-8 py-8 my-2 font-bold text-purple-600"
          onClick={goToQueslistPage}
        >
          질문게시판
        </button>
        <div className="absolute top-0 right-0 mr-20">
          <button
            type="button"
            className="rounded-3xl border-none h-10 w-20 mx-1 my-8"
            style={{ backgroundColor: ColorSystem.MainColor.quartic }}
            onClick={goToLogin}
          >
            로그인
          </button>
          <button
            type="button"
            className="rounded-3xl border-none h-10 w-20 mx-1 my-8"
            style={{ backgroundColor: ColorSystem.MainColor.tertiary }}
            onClick={goToSignUp}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuesListNavBar;
