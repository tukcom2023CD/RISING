import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import NavBar from 'components/NavBar';
import ResentSlide from "../components/ResentSlide";


function MainPage() {
  return (
    <div>
    <div
      className="h-screen"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      <NavBar />
      <ResentSlide />
      </div>
      </div>
  );
}

export default MainPage;
