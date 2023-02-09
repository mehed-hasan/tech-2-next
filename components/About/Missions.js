import { missions } from "/public/data/aboutUs";
import Mission from "./Mission";

function Missions() {
    return ( 

        <>
         <div className="gap"></div>
 <div className="gap d-block d-md-none"></div>

 
 <section className="all_missions">

  <div className="missoin_header ">
    <h2 className="heading_2">{missions.title}</h2>
    <p>
      {missions.details}
    </p>
 </div>

 <div className="gap"></div>

    <div className="container">
        {
          missions.mission.map((item,index)=>
          <Mission key={item.index} data={item} />
          )
        }
   </div>
 </section>
 <div className="gap"></div>
        </>
     );
}

export default Missions;