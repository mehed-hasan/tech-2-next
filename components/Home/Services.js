import Heading from "../Common/Heading";
import { services } from "/public/data/home";
import ServiceCard from "./ServiceCard";

function Services() {
    return ( 
        <>
               <div className="gap"></div>

<section id="services">
    <div className="container">
      <Heading data={services.heading}/>

       <div className="service_elements">
         <div className="row">
           {
            services.service.map((item)=>
            
            <div key={item.id} className="col-12 col-sm-12 col-md-6 col-lg-4 service_col">
              <ServiceCard  data={item} />
            </div>
            )
           }




         </div>
       </div>
    </div>
</section>

        </>
     );
}

export default Services;