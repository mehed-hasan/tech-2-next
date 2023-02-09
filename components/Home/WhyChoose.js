import { chooseUs } from "/public/data/home";
import Heading from "../Common/Heading";
import Choosed from "./Choosed";


function WhyChoose() {
    return ( 
        <>
      <div className="gap"></div>
      <section id="choose">
        <div className="gap"></div>
        <Heading data={chooseUs.heading} />
        <div className="gap"></div>

        <div className="container">
          <div className="row">
              {
                chooseUs.choosed.map((item,index)=>
                <Choosed key={index} data={item}/>
                )
              }

          </div>
        </div>
        <div className="gap"></div>
      </section>  
        </>
     );
}

export default WhyChoose;