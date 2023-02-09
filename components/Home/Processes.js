import Heading from "../Common/Heading";
import { processes } from "/public/data/home";
import ProcessElements from "./ProcessElements";
import { useState } from "react";
import { useEffect } from "react";

function Processes() {
  const [waveName, setWaveName] = useState('wave1');
  const [time, setTime] = useState(0);
  const test = setTimeout(() =>{
    setTime(time+1);
  },1000);


  useEffect(() =>{
    if(time > 0 && time < 3){
      setWaveName('wave1')
    }
    else if(time >= 3 && time < 6){
      setWaveName('wave2')
    }
    else if(time >= 6 && time < 9){
      setWaveName('wave3')
    }
    else if (time >= 9){
      setTime(0);
    }

    return () => clearInterval(test);
  },[time])
  
  // console.log(time);





    return ( 

        <>
      <div className="gap"></div>
      {/* <h1>{time}</h1> */}
       <section id="process">
      <Heading data={processes.heading} />
        <div className="container">
          <div className="row">
            {
              processes.process.map((process)=>
              <div key={process.id} className={`${process.id == 2 ? 'col-12':'col-6'}  col-md-4 col-lg-4 col-xl-4 col-xxl-4 `}>
                <ProcessElements isAnimate={`wave${process.id}` === waveName ?  true : false}   data={process}/>
              </div>
              )
            }
          </div>
        </div>
      </section> 
        </>
     );
}

export default Processes;