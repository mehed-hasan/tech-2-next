
function DetailsSection({data}) {

    const url = window.location.pathname;
    const pageName = url.split('/');
    const folderName = pageName[1];
    console.log(folderName);


    return ( 
        <>
        <div className="top_page_gap"></div>
           <section className="portfolio_desc">
                 <div className="container">
                    <h5 className="custom_heading">
                        {data.title}
                    </h5>
                    <div className="tag_and_date">
                        <p className="tag">{data.cat}</p>
                        <div className="date">{data.date}</div>
                    </div>
       
       
                    <div className="case_portfolio_bg" 
                    style={data.previewImage === '' ?  {backgroundImage:`url(${require('../../images/default.jfif')})`} :  {backgroundImage:`url(${require(`../../images/${folderName}/${data.previewImage}`)})`}}>
                    </div>
    
                    <div className="about_portfolio">
                       <div className="row">
                           <div className="col-12 col-lg-8">
                            <div className="about">
                                <h5 className="custom_heading">{data.title}</h5>
    
                                <p>
                                   {data.details}
                                </p>
                           </div>
                           </div>
                           <div className="col-12 col-lg-4">
                            <div className="info">
                                <table>
    
                                    <tr>
                                      <td>Client:</td>
                                      <td>{data.client}</td>
                                    </tr>
                                    <tr>
                                      <td>Category:</td>
                                      <td style={{textTransform:'capitalize'}}>{data.cat}</td>
                                    </tr>
                                    <tr>
                                      <td>Date:</td>
                                      <td>{data.date}</td>
                                    </tr>
    
                                  </table>
                            </div>
                           </div>
                       </div>
                    </div>
    
    
                    <div className="results">
                        <div className="row">
                            <div className="col-12 col-md-2">
                                <h5 className="custom_heading"> Results</h5>
                            </div>
                            <div className="col-12 col-md-10">
                                <div className="result_details">
                                    <p>
                                        {data.results.outputBrief}
                                    </p>
                                </div>
    
                                <div className="result_numbers">
                                    <div className="row">
                                        <div className="col-12 col-md-3">
                                              <h5 className="custom_heading">+{data.results.request}</h5>
                                              <p><b>Request </b>per week</p>
                                        </div>
                                        <div className="col-12 col-md-3">
                                            <h5 className="custom_heading">+{data.results.viewd}</h5>
                                            <p><b>Request </b>per week</p>
                                      </div>
                                      <div className="col-12 col-md-3">
                                        <h5 className="custom_heading">+{data.results.visited}</h5>
                                        <p><b>Request </b>per week</p>
                                  </div>
          
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
           </section>
    
            </>
     );
}

export default DetailsSection;