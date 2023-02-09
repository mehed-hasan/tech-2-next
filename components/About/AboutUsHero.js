import { aboutHero } from "/public/data/aboutUs";
import Status from "./Status";

function AboutUsHero() {
    return ( 
        <>
    <section className="about_us_hero">
     <div className="gap"></div>
      <div className="container">
          <h2 className="heading_2">
             {aboutHero.title}
          </h2>


          <div className="map" style={{backgroundImage:`url(${`/images/about_us/${aboutHero.background}`})`}}>
              <div className="stats">
                {
                    aboutHero.criteria.map((item)=>
                     <Status key={item.id} data={item}/>
                    )
                }
              </div>
          </div>
      </div>
 </section>

        </>
     );
}

export default AboutUsHero;