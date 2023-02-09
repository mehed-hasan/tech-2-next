function Heading({data}) {
    return ( 
        <>
        <div className="titles text-center">
        <h2 className="heading_2">{data.title}</h2>
        <p>{data.subtitle} </p>
       </div>
        </>
     );
}

export default Heading;