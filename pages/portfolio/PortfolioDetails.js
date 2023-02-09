import { useParams } from "react-router-dom";
import DetailsSection from "../../components/Common/DetailsSection";
import ShowCase from "../../components/Common/ShowCase";
import ClientSay from "../../components/Home/ClientSay";
import { portfolio } from "../../data/portfolio";
import useTitle from "../../hooks/useTitle";

function PortfolioDetails() {

    let data = useParams();

    useTitle(data.slug);
    
    const singleData = portfolio.work.find((item) => {return data.id == item.id});
    const similarData = portfolio.work.filter((item)=> {return data.cat === item.cat})
    

    
    
    return ( 

        <> 
        <DetailsSection data={singleData} />
        <ClientSay/>
        <ShowCase data={similarData} />
        </>
     );
}

export default PortfolioDetails;