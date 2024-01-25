import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import OurService from "../../components/OurService/OurService";
import About from "../../components/About/About";
import OurProject from "../../components/OurProject/OurProject";
import WorkingSteps from "../../components/WorkingSetps/WorkingSteps";
import MeetOurTeam from "../../components/MeetOurTeam/MeetOurTeam";
import WhatWeDone from "../../components/WhatWeDone/WhatWeDone";
import FeedBack from "../../components/FeedBack/FeedBack";
import Stats from "../../components/Stats/Stats";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  useEffect(() => {
    AOS.init();
    // AOS.refresh();
  }, []);

  return (
    <div className="w-full overflow-hidden ">
      <Navbar />
      <Banner />
      <OurService />
      <About />
      <OurProject />
      <WorkingSteps />
      <MeetOurTeam />
      <WhatWeDone />
      <FeedBack />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
