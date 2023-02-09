import { counters } from "/public/data/home";
import CounterElements from "./CounterElements";

function Counter() {
    return ( 
        <>
              <div className="gap"></div>

<section id="counter">
  <div className="container">
    <div className="row">
      {
        counters.map((counter)=>
        <div key={counter.id} className="col-4">
          <CounterElements  data={counter} />
        </div>
        )
      }
    </div>
  </div>
</section>
        </>
     );
}

export default Counter;