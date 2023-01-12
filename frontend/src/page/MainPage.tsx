import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import NavBar from 'components/NavBar';
import ResentSlide from "../components/ResentSlide";
import MainMenu from "../components/MainMenu";
import MainImage from "../images/aha.png"


function MainPage() {
  return (
    <div>
      <NavBar />
      <div
        className="h-screen"
        style={{ backgroundColor: ColorSystem.MainColor.Primary }}
      >
        <div className= "mb-8 grid place-items-center  ">
          <img 
              className="mt-8  w-10/12 h-60 rounded-[30px] "
              src={MainImage} alt = "메인이미지"
              />
        </div>
          <span className="mx-12 pl-6 text-text-color text-lg">분야별 멘토링</span>
            <MainMenu/>
          <span className="mx-12 pl-6 text-text-color text-lg">최근에 해결된 질문</span>
            <ResentSlide />
      </div>
    </div>
  );
}

export default MainPage;
