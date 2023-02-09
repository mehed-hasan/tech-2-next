function MissionStats({data}) {
    return ( 
        <>
                    <div className="mission_number d-flex">
                   <picture>
                   <img src={require(`../../images/about_us/${data.icon}`)} alt=""/>
                   </picture>
                   <div className="mission_no">
                     <h3>{data.amount} +</h3>
                     <p>{data.title}</p>
                   </div>
                  </div>
        </>
     );
}

export default MissionStats;