import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ColorSystem from '../utils/ColorSystem';
import img1 from "../images/dog.png"
import img2 from "../images/dog.png"
import img3 from "../images/dog.png"
import img4 from "../images/dog.png"
import img5 from "../images/dog.png"
import img6 from "../images/dog.png"

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear"
};

function ResentSlide() {
    return (
      <div>
         {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Slider {...settings}>
          <div className="flex flex-wrap justify-center">
          <div className="w-1/3 sm:w-4/12 px-4">
            <img 
            className="p-1 bg-violet-300 border rounded max-w-sm"
            src={img1} alt = "img1"
            />
          </div>
          </div>
          <div className="flex flex-wrap justify-center">
          <div className="w-1/3 sm:w-4/12 px-4">
            <img 
            className="p-1 bg-violet-300 border rounded max-w-sm"
            src={img1} alt = "img1"
            />
          </div>
          </div>
          <div className="flex flex-wrap justify-center">
          <div className="w-1/3 sm:w-4/12 px-4">
            <img 
            className="p-1 bg-violet-300 border rounded max-w-sm"
            src={img1} alt = "img1"
            />
          </div>
          </div>
          <div className="flex flex-wrap justify-center">
          <div className="w-1/3 sm:w-4/12 px-4">
            <img 
            className="p-1 bg-violet-300 border rounded max-w-sm"
            src={img1} alt = "img1"
            />
          </div>
          </div>
          <div className="flex flex-wrap justify-center">
          <div className="w-1/3 sm:w-4/12 px-4">
            <img 
            className="p-1 bg-violet-300 border rounded max-w-sm"
            src={img1} alt = "img1"
            />
          </div>
          </div>
          <div className="flex flex-wrap justify-center">
          <div className="w-1/3 sm:w-4/12 px-4">
            <img 
            className="p-1 bg-violet-300 border rounded max-w-sm"
            src={img1} alt = "img1"
            />
          </div>
          </div>
        </Slider>
      </div>
    );
  }
  export default ResentSlide;