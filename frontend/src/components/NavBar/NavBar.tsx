import logo from 'images/logo.png';
import { useNavigate } from 'react-router-dom';

function NavBar() {
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

  return (
    <div className="w-full h-30 border-b-2 bg-white">
      <div className="flex flex-row">
        <button type="button" onClick={goToMain}>
          <img
            className="left-0 w-48 max-sm:w-28 pl-12 pr-8 py-8 max-sm:pl-6 max-sm:pr-4 max-sm:py-4"
            src={logo}
            alt="logo"
          />
        </button>
        <button
          type="button"
          className="lg:text-2xl md:text-xl max-sm:text-sm lg:pl-10 lg:pr-8 lg:py-8 lg:my-2 md:pl-8 md:pr-6 md:my-1 sm:pl-6 sm:pr-4 max-sm:pl-6 max-sm:pr-4 max-sm:py-3"
          onClick={goToQues}
        >
          질문 작성
        </button>
        <button
          type="button"
          className="lg:text-2xl md:text-xl max-sm:text-sm lg:pl-10 lg:pr-8 lg:py-8 lg:my-2 md:pl-8 md:pr-6 md:my-1 sm:pl-6 sm:pr-4 max-sm:pl-6 max-sm:pr-4 max-sm:py-3"
          onClick={goToPrivateQues}
        >
          멘토링 질문 작성
        </button>
        <button
          type="button"
          className="lg:text-2xl md:text-xl max-sm:text-sm lg:pl-10 lg:pr-8 lg:py-8 lg:my-2 md:pl-8 md:pr-6 md:my-1 sm:pl-6 sm:pr-4 max-sm:pl-6 max-sm:pr-4 max-sm:py-3"
          onClick={goToQueslistPage}
        >
          질문게시판
        </button>
      </div>
    </div>
  );
}

export default NavBar;
