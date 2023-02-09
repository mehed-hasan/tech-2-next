import { caseStudyHero } from "/public/data/caseStudy";
import FillBtn from "../Common/FillBtn";

function CaseBanner() {
    return ( 

        <>
    <section className="case_banner min_content">
     <div className="container">
         <div className="row">
             <div className="col-12 col-md-6 order-2 order-md-1">
                 <div className="case_banner_left">
                  <h1 className="heading_1">{caseStudyHero.title}</h1>
                  <p>
                   {caseStudyHero.details}
                  </p>

                  <FillBtn btnText='Get Started' link='/#'/>

                 </div>
             </div>
             <div className="col-12 col-md-6 text-center text-lg-end order-1 order-md-2 ">
                 <img className="img-fluid" src={`/images/case_study/${caseStudyHero.image}`} alt="Case banner"/>
             </div>
         </div>
     </div>
 </section>

 <div className="gap"></div>
        </>
     );
}

export default CaseBanner;