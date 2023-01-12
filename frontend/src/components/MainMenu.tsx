import Slider from "react-slick";
import Categori1 from "../images/Categori1.png";
import Categori2  from "../images/Categori2.png"
import Categori3  from "../images/Categori3.png"
import Categori4  from "../images/Categori4.png"
import Categori5  from "../images/Categori5.png"

function MainMenu() {


    return (
        <div className="">
        <div className="flex flex-row place-content-center mt-8 mb-8">
                <img 
                className="ml-2.5 rounded-3xl w-20 md:w-40 lg:w-60 px-4"
                src={Categori1} 
                alt = "img1"
                />

                <img 
                className="ml-2.5 rounded-3xl w-20 md:w-40 lg:w-60 px-4"
                src={Categori2} 
                alt = "img1"
                />

                <img 
                className="ml-2.5 rounded-3xl w-20 md:w-40 lg:w-60 px-4"
                src={Categori3} 
                alt = "img1"
                />
        
                <img 
                className="ml-2.5 rounded-3xl w-20 md:w-40 lg:w-60 px-4"
                src={Categori4} 
                alt = "img1"
                />
        
                <img 
                className="ml-2.5 rounded-3xl w-20 md:w-40 lg:w-60 px-4"
                src={Categori5} 
                alt = "img1"
                />
</div>
</div>
    )
};
export default MainMenu;