import OutlineBtn from "../Common/OutlineBtn";

function Portfolio({data}) {
    return ( 

        <>
        <div className="portfolio">
                    <div className="row">
                    <div className="col-12 col-md-6 left_col">
                        <div className="portfolio_img">
                          <picture>
                            <img className="img-fluid" src={`/images/portfolio/${data.thumbnail}`} alt="Project 1" srcSet=""/>
                          </picture>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 right_col">
                        <div className="portfolio_details">
                            <div className="tag">
                                {data.cat}
                            </div>

                            <h5 className="custom_heading"> {data.title}</h5>
                            <p className="date">{data.date}</p>

                            <div className="details">
                                <p>
                                    {data.details}
                                </p>
                            </div>
                            <div className="gap"></div>
                            <OutlineBtn link={`/portfolio/${data.id}/${data.cat}/${data.slug}`} btnText='View More'/>
                        </div>
                    </div>
                   </div>
                </div>
        </>
     );
}

export default Portfolio;