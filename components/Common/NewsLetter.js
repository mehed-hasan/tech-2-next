import { newsLetter } from "/public/data/home";


function NewsLetter() {
    return ( 
        <>
        <section id="newsletter" style={{backgroundImage:`url(${`/images/about_us/${newsLetter.image}`})`}}>
        <div className="gap"></div>
        <div className="newsletter_element">
          <h2 className="heading_2 text-center">{newsLetter.title}</h2>
          <p className="text-center">{newsLetter.details}</p>

          <div data-aos="mid-skew" data-aos-duration="1500" className="newsletter_input">
            <input placeholder="Enter your mail" type="email" className="form-control"/>
            <button className="subscribe_btn" type="submit">Subscribe</button>
          </div>
        </div>
        <div className="gap"></div>
      </section> 
        </>
     );
}

export default NewsLetter;