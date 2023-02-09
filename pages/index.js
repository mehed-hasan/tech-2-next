import NewsLetter from "../components/Common/NewsLetter";
import ClientSay from "../components/Home/ClientSay";
import Companies from "../components/Home/Companies";
import Counter from "../components/Home/Counter";
import HomeHero from "../components/Home/HomeHero";
import LearnMore from "../components/Home/LearnMore";
import Processes from "../components/Home/Processes";
import Services from "../components/Home/Services";
import WhyChoose from "../components/Home/WhyChoose";
import AboutSection from "../components/Home/AboutSection";

function HomePage() {


    return ( 

    <>
    <HomeHero/>
    <Companies/>
    <Services/>
    <Counter/> 
    <Processes/>
    <WhyChoose/>
    <AboutSection/>
    <LearnMore/>
    <ClientSay/>
    <NewsLetter/>
    </>

     );
}

export default HomePage;