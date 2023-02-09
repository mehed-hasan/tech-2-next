import { useParams } from "react-router-dom";
import { caseStudy } from "../../data/caseStudy";
import DetailsSection from "../../components/Common/DetailsSection";
import ShowCase from "../../components/Common/ShowCase";
import NewsLetter from "../../components/Common/NewsLetter";
import '../../css/portfolio.css';
import '../../css/casestudy.css';
import useTitle from "../../hooks/useTitle";

function CaseDetails() {
    
    let data = useParams();
    
    useTitle(data.slug)
    
    const singleData = caseStudy.studies.find((item) => {return data.id == item.id});
    const similarData = caseStudy.studies.filter((item)=> {return data.cat === item.cat})
    console.log(similarData.length);
    return ( 

        <>
        <DetailsSection data={singleData} />
        <ShowCase data={similarData} />
        <NewsLetter/>
        </>
     );
}

export default CaseDetails;