function Status({data}) {
    return ( 

        <>
                 <div className="clients">
                      <picture><img src={`/images/about_us/${data.image}`} alt=""/> </picture>
                      <span>{data.amount}+ </span> <span>{data.title}</span>
                  </div>
        </>
     );
}

export default Status;