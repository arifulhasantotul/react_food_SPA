import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import home1 from "../../images/home-img-1.png";
import home2 from "../../images/home-img-2.png";
import home3 from "../../images/home-img-3.png";
import "./HomeSlider.css";
const HomeSlider = () => {
   const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 1500,
      autoplay: true,
      arrows: true,
      autoplaySpeed: 1500,
      cssEase: "linear",
      slidesToShow: 1,
      slidesToScroll: 1,
   };
   return (
      <>
         <Slider {...settings} className="home_slider">
            {/* slide 1 start  */}
            <div className="special_item" style={{ display: "flex" }}>
               {/* content  */}
               <div>
                  <span>our special dish</span>
                  <h3>spicy noodles</h3>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Aut dolorem quasi quisquam.
                  </p>
                  <NavLink to="" class="btn">
                     Order Now
                  </NavLink>
               </div>
               {/* image  */}
               <div>
                  <img src={home1} alt="" />
               </div>
            </div>
            {/* slide 1 end  */}

            {/* slide 2 start  */}
            <div className="special_item">
               {/* content  */}
               <div>
                  <span>our special dish</span>
                  <h3>spicy noodles</h3>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Aut dolorem quasi quisquam.
                  </p>
                  <NavLink to="" class="btn">
                     Order Now
                  </NavLink>
               </div>
               {/* image  */}
               <div>
                  <img src={home2} alt="" />
               </div>
            </div>
            {/* slide 2 end  */}

            {/* slide 3 start  */}
            <div className="special_item">
               <div>
                  {/* content  */}
                  <span>our special dish</span>
                  <h3>spicy noodles</h3>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Aut dolorem quasi quisquam.
                  </p>
                  <NavLink to="" class="btn">
                     Order Now
                  </NavLink>
               </div>
               {/* image  */}
               <div>
                  <img src={home3} alt="" />
               </div>
            </div>
            {/* slide 3 end  */}
         </Slider>
      </>
   );
};

export default HomeSlider;
