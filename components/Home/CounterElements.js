
import { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";



function CounterElements({data,className, ...rest }) {

  const [viewPortEntered, setViewPortEntered] = useState(false);

    return ( 
        <>
        <div className="counter_elements d-flex">
          <div className="counter_img " data-aos="left-skew" data-aos-duration={data.reached}>
            <img src={`/images/counters/${data.image}`} alt=""/>
          </div>
          <div className="counter_text">
            <CountUp end={data.reached} duration={5}>
            {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start}>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
            </CountUp>
            

            <p>{data.criteria}</p>
          </div>
        </div>
        </>
     );
}

export default CounterElements;