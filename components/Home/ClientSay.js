import { comments } from "/public/data/home";
import CommentSliderEl from "./CommentSliderEl";
import Slider from "react-slick";

function ClientSay() {

  const settings = {
    slidesToShow: 2 ,
    rows:2,
    slidesToScroll: 2,
    autoplay: true,
    arrows:false,
    dots: true,
    autoplaySpeed: 3000,
    speed:2000,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          rows:2,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          infinite: true,
          dots: true
        }
      }
    
    ]
  };
    return ( 

        <>
             <section id="client_say">
              <div className="gap"></div>
                <div className="container">
                <h2 className="h2 heading_2 text-center">Our satisfied <span className="linear_text_2">Client’s say</span></h2>
              <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus aenean mauris blandit ac massa fames odio. Sit vivamus sed fames erat tempor, morbi dapibus.</p>
              <div className="comment_slider">
                <Slider {...settings}>
                {
                  comments.map((comment,index)=>
                    <CommentSliderEl key={index} data={comment}/>
                    )
                  }
                  </Slider>
              </div>

                </div>
              
              <div className="gap"></div>
            </section> 
        </>
     );
}

export default ClientSay;