function Mission({data}) {
    return ( 
        <>
        <div className="missions">
          <div className="row">
            <div className="col-12 col-md-7 left_side">
              <div className="missions_left ">
                <h3 className="heading_3">Our Mission</h3>
                <p className="mission_details">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut arcu maecenas erat scelerisque gravida arcu. Consectetur fames lorem laoreet aliquam lectus.
                </p>

                <div className="mission_stats">
                {
                    data.productInfo.map((item,index)=>
                    <div key={item.index} className="mission_number d-flex">
                    <picture>
                    <img src={`/images/about_us/${item.icon}`} alt=""/>
                    </picture>
                    <div className="mission_no">
                      <h3>{item.amount} +</h3>
                      <p>{item.title}</p>
                    </div>
                   </div>
                    )
                }
                </div>



              </div>
            </div>
            <div className="col-12 col-md-5 text-center text-md-start right_side">
            <div className="mission_right ">
              <picture>
              <img className="img-fluid" src={`/images/about_us/${data.image}`} alt=""/>
              </picture>
            </div>
          </div>
          </div>
        </div>
        </>
     );
}

export default Mission;