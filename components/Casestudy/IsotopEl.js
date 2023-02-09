import Link from "next/link";

function IsotopEl({data}) {
    return ( 
        <>
        <div className={`case_study element-item ${data.cat}`} >
                  <img className="img-fluid" src={`/images/case_study/${data.thumbnail}`} alt="Case 1"/>
                  <p className="title">{data.cat} </p>
                  <h3 className="heading_3">{data.title}</h3>
                  
                  <div className="view_btn">
                    <Link href={`/case_study/${data.id}/${data.cat}/${data.slug}`}>View Case Study</Link>
                    <div className="dash"></div>
                  </div>
               </div>
        </>
     );
}

export default IsotopEl;