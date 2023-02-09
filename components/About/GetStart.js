import { goCard } from "/public/data/aboutUs";
import FillBtn from "../Common/FillBtn";

function GetStart() {
    return ( 
        <>
<div className="gap"></div>
<section className="get_started" style={{backgroundImage:`url(${`/images/about_us/${goCard.image}`})`}}>
  <div className="gap"></div>
  <div className="container">
    <div className="row">
     <div className="get_started_el">
       <h4 className="heading_4">
        {goCard.title}
       </h4>

       <p>
        {goCard.details}
       </p>
       <div className="gap"></div>
       <FillBtn link='/#' btnText='Get Started'/>
     </div>
    </div>
  </div>
  <div className="gap"></div>
</section>
        </>
     );
}

export default GetStart;