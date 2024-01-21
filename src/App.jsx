import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import FeedBack from "./components/FeedBack/FeedBack";
import Footer from "./components/Footer/Footer";
import MeetOurTeam from "./components/MeetOurTeam/MeetOurTeam";
import Navbar from "./components/Navbar/Navbar";
import OurProject from "./components/OurProject/OurProject";
import OurService from "./components/OurService/OurService";
import Stats from "./components/Stats/Stats";
import WhatWeDone from "./components/WhatWeDone/WhatWeDone";
import WorkingSteps from "./components/WorkingSetps/WorkingSteps";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
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

export default App;
