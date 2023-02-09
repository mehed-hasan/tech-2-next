

import Link from "next/link";
import { optimization } from "/public/data/home";


function LearnMore() {
    return ( 

        <>
<div className="gap"></div>
<section id="learn_more">
 <div className="container">
   <div className="row">
     <div className=" col-md-12 col-lg-7  order-2 order-lg-1">
       <div className="learn_text" data-aos="laying-left-spring" data-aos-duration="1500">
         <h1 className="heading_1">
          {optimization.title}
         </h1>
         <p>{optimization.details}</p>
         <Link href="" className="learn_btn">Learn More </Link>
       </div>
       </div>

       <div className="col-md-12 col-lg-5 order-1 order-lg-2">
           <div className="learn_more_img animated_banner">
             <img value="-2" src={`/images/learn_more/${optimization.image}`} alt="" srcSet=""/>
           </div>
       </div>
       </div>
   </div>
</section> 
        </>
     );
}

export default LearnMore;