import AboutUsHero from '../../components/About/AboutUsHero';
import Achivements from '../../components/About/Achivments';
import Business from '../../components/About/Business';
import GetStart from '../../components/About/GetStart';
import Missions from '../../components/About/Missions';
import NewsLetter from '../../components/Common/NewsLetter';



function AboutPage() {

    return ( 
        <>
        <AboutUsHero/>
        <Achivements/>
        <Missions/>
        <NewsLetter/>
        <Business/>
        <GetStart/>
        </>
     );
}

export default AboutPage;