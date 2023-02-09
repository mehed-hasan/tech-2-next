import { Link } from "react-router-dom";
import Slider from "react-slick";

function ShowCase({data}) {


    const url = window.location.pathname;
    const pageName = url.split('/');
    const folderName = pageName[1];
    console.log(folderName);


    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        dots: false,
        autoplaySpeed: 3000,
        speed:2000,
    
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplay: false,
              infinite: true,
              dots: false,
              centerMode: true,
              centerPadding: '40px',
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: false,
              infinite: true,
              dots: false,
              centerMode: true,
              centerPadding: '80px',
            }
          }
        
        ]
      };


    return ( 
        <>
    <div className="project_showcase">
        <h2 className="heading_2"> {folderName === 'portfolio' ? 'Explore More Projects':'Related Case Studies'} </h2>

        <div className="container">
          <div className="projects_slider case_study element-item">
              <Slider {...settings}>
              {
                data.map((item)=>
                <div key={item.id} className="project">
                  <img className="img-fluid" src={require(`../../images/${folderName}/${item.thumbnail}`)} alt="App Demo"/>
                  <p>{item.cat}</p>
                  <h3 className="heading_3">{item.title}</h3>
                  <div className="view_btn">
                  <Link href='/#'>View Case Study</Link>
                  <div className="dash"></div>
                  </div>
              </div>
                )
              }
              </Slider>
          </div>
        </div>
    </div>
        </>
     );
}

export default ShowCase;