import { caseStudy } from "/public/data/caseStudy";
import IsotopEl from "./IsotopEl";
import Isotope from "isotope-layout";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";





function IsotopSection () {


        // React isotop helped link https://codepen.io/ilovepku/pen/zYYKaYy

        // init one ref to store the future isotope object
        const isotope = useRef()
        // store the filter keyword in a state
        const [filterKey, setFilterKey] = useState('*')
      
        // initialize an Isotope object with configs
        useEffect(() => {
          isotope.current = new Isotope('.content', {
            itemSelector: '.element-item',
            layoutMode: 'fitRows',
          })  
          // cleanup
          return () => isotope.current.destroy()
        }, [])
      
        // handling filter key change
        useEffect(() => {
          filterKey === '*'
            ? isotope.current.arrange({filter: `*`})
            : isotope.current.arrange({filter: `.${filterKey}`})
        }, [filterKey])
      
        const handleFilterKeyChange = (key)=>{
            setFilterKey(key);
        }








    return ( 
        <>
         {/* <!-- Isotop Dom started  --> */}
 <section className="isotop min_content container">
      
      <div className="button_and_heading">
    
        <div className="heading">
          <p>OUR RECENT PROJECT</p>
          <h2 className="heading_2">{caseStudy.title}</h2>
        </div>
        <div className="button-group filters-button-group">
          <button onClick={() => handleFilterKeyChange('*')} className="button is-checked" data-filter="*">All</button>
          <button onClick={() => handleFilterKeyChange('business')} className="button" data-filter=".business ">Business</button>
          <button onClick={() => handleFilterKeyChange('consulting')} className="button" data-filter=".consulting">Consulting </button>
          <button onClick={() => handleFilterKeyChange('engineering')} className="button" data-filter=".engineering">Engineering</button>
          <button onClick={() => handleFilterKeyChange('product')} className="button" data-filter=".product">Product</button>
        </div>
      </div>
          
          <div className="content">
             {
                caseStudy.studies.map((item)=>
                <IsotopEl key={item.id} data={item}/>
                )
             }
          </div>
          {/* <!-- /content --> */}
     </section>
     {/* <!-- Isotop Dom ended  --> */}
        </>
     );
}

export default IsotopSection;