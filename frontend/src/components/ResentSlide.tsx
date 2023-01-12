
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
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 3000,

};

function ResentSlide() {


    return (
      
      <div className=" m-8 mx-10 space-x-4">

         {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Slider {...settings}>

            <img 
            className=" px-10  "
            src={img1} alt = "img1"
            />
          

          
    
            <img 
            className="px-10 "
            src={img1} alt = "img1"
            />




            <img 
            className="px-10  "
            src={img1} alt = "img1"
            />
          



            <img 
            className="px-10  "
            src={img1} alt = "img1"
            />




            <img 
            className="px-10  "
            src={img1} alt = "img1"
            />




            <img 
            className="px-10    "
            src={img1} alt = "img1"
            />



        </Slider>
        </div>
      
    );
  }
  export default ResentSlide;
