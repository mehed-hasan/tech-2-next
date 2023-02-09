import Link from "next/link";
import { aboutData } from "/public/data/home";

function AboutSection() {
    return ( 
        <>
      <div className="gap"></div>
      <section id="about_us" >
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h2 className="heading_2 about_mob-heading text-center d-block d-md-none">{aboutData.heading.title}</h2>

              <div className="about_us_images">
                <div className="row">
                  <div  className="col-5  ">
                    <div data-aos="left_flip" data-aos-duration="1500" style={{overflow:'overflow: hidden', backgroundImage:`url(${`/images/about_us/${aboutData.contents.images.image1}`})`}} className="about_image_1">
                    </div>
                  </div>
                  <div data-aos="left_flip" data-aos-duration="1500"  className="col-7  ">
                    <div className="about_image_2" style={{backgroundImage:`url(${`/images/about_us/${aboutData.contents.images.image2}`})`}}>
                    </div>
                  </div>

                  <div  className="col-12">
                    <div data-aos="wake-up" data-aos-duration="1800" className="about_image_3" style={{backgroundImage:`url(${`/images/about_us/${aboutData.contents.images.image3}`})`}}>
                    </div>
                  </div>

                </div>



              </div>
            </div>

            <div className="col-md-7 ">
              <div className="abour_us_texts" data-aos="right-skew" data-aos-duration="1500">
                <h2 className="heading_2 about_lg-heading d-none d-md-block">{aboutData.heading.title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non eget tortor, nascetur ut gravida aliquet lorem nec. Fermentum eget neque suspendisse feugiat id. Convallis ultricies id elementum pretium mi id. Id vel accumsan gravida nec sagittis dolor. Massa tincidunt scelerisque leo venenatis fames.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non eget tortor, nascetur ut gravida aliquet lorem nec. Fermentum eget neque suspendisse feugiat id. Convallis ultricies id elementum pretium mi id. Id vel accumsan gravida nec sagittis dolor. Massa tincidunt scelerisque leo venenatis fames.</p>

                <div className="about_btn  text-center text-md-start">
                  <Link href="" className="blue_btn">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gap"></div>
      </section>
        </>
     );
}

export default AboutSection;