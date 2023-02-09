function Choosed({data}) {
    return ( 

        <>
            <div className="col-sm-12 col-md-6">
              <div className="choose_elements d-flex">
                <div data-aos="flip-left" data-aos-duration="1200" className="choose_icons">
                  <picture>
                  <img src={`../images/choose/${data.image}`} alt="" srcSet=""/>
                  </picture>
                </div>
                <div className="choose_text ">
                  <h4 className="heading_4">Customer Support</h4>
                  <p data-aos="laying-left-spring" data-aos-duration="1500">We provide the most responsive and functional IT design for companies and businesses worldwide.</p>
                  <p></p>
                </div>
              </div>
            </div>
        </>
     );
}

export default Choosed;