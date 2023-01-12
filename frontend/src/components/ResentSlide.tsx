import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/dog.png";
// import img2 from "../images/dog.png"
// import img3 from "../images/dog.png"
// import img4 from "../images/dog.png"
// import img5 from "../images/dog.png"
// import img6 from "../images/dog.png"

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 3000,

};

function ResentSlide() {


    return (
      <div className=" m-8 mx-10">
         {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Slider {...settings}>
          {/* 임시로 강아지 사진으로 넣음, 추후 게시글 불러올 예정 */}
            <img 
            className="px-10 w-20 md:w-40 lg:w-60"
            src={img1} alt = "1등 게시글"
            />

            <img 
            className="px-10 w-20 md:w-40 lg:w-60"
            src={img1} alt = "2등 게시글"
            />

            <img 
            className="px-10 w-20 md:w-40 lg:w-60"
            src={img1} alt = "3등 게시글"
            />

            <img 
            className="px-10 w-20 md:w-40 lg:w-60"
            src={img1} alt = "4등 게시글"
            />

            <img 
            className="px-10 w-20 md:w-40 lg:w-60"
            src={img1} alt = "5등 게시글"
            />

            <img 
            className="px-10 w-20 md:w-40 lg:w-60"
            src={img1} alt = "6등 게시글"
            />

        </Slider>
      </div>
    );
  }
export default ResentSlide;
