import { awards } from "/public/data/aboutUs";
import AchivementsEl from "./AchivmentsEl";

function Achivements() {
    return ( 

        <>
         <div className="gap"></div>

        <section className="achivements" style={{ backgroundImage:`url(${`images/about_us/${awards.image}`})`}}>
        <div className="container">
          <div className="row">

              {
                awards.achive.map((achivement)=>
                <AchivementsEl key={achivement.id} data={achivement}/>
                )
              }

          </div>
        </div>
        </section>
        </>
     );
}

export default Achivements;