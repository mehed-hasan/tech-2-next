import Slider from "react-slick";
import { companyLogo } from "/public/data/home";
import CompanyLogo from "./CompanyLogo";

function Companies() {

  const settings = {
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    centerMode: true,
    autoplaySpeed: 2000,
  
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 2
      }
    }
  ]
  }
    return ( 
        <>
    <section id="companies">
      <div className="container  container-md container-lg container-xl container-xxl ">
        <div className="company_slider   ">
          <Slider {...settings}>
            {
              companyLogo.map((logo,index) =>
              <CompanyLogo key={index} data={logo}/>
              )
            }
          </Slider>
        </div>
      </div>
   </section> 
        </>
     );
}

export default Companies;