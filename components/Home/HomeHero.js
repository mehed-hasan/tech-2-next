import Slider from "react-slick";
import { HomeHeroSlider } from "/public/data/home";
import HeroSliderEl from "./HeroSliderEl";


function HomeHero() {
        const settings = {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows:false,
          fade: true,
          autoplaySpeed: 3000,
          speed:2000,
          cssEase: 'ease-in-out'
        };

    return ( 
        <>
    <section id="hero">
    <div className="container hero_slider">
      <Slider {...settings}>
         {
          HomeHeroSlider.map((slider,index) =>
           <HeroSliderEl  key={index} data={slider}/>
          )
         }
      </Slider>
    </div>
  </section>
        </>
     );
}

export default HomeHero;