import Button from "../../shared/Button";
import Title from "../../shared/Title";

const AboutPage = () => {
  return (
    <div className="my-8 md:my-14 lg:my-20">
      {/* who we are */}
      <div className="grid items-center grid-cols-1 gap-10 px-4 lg:grid-cols-2 md:px-8 lg:px-20 ">
        <div>
          <Title title={"Who We Are? "} heading1={"DubaiBD IT Ltd."} />
          <p className="my-5 text-lg text-justify text-paragraph">
            DubaiBD IT Ltd. is a leading provider of IT consulting and software
            development services, delivering customized digital solutions
            globally. Specializing in bespoke software development and
            comprehensive IT services, our seasoned team tailors solutions for
            individuals, startups, and small to medium-sized businesses. With a
            commitment to leveraging the latest technologies, DubaiBD IT Ltd.
            serves as a technology pioneer, helping organizations overcome
            complex challenges and achieve remarkable business growth. Whether
            enhancing performance for non-IT entities or enabling software
            product companies to swiftly attract new customers, we are your
            trusted partner in navigating the dynamic IT landscape.
          </p>
          <Button title={"Contact Us"} />
        </div>
        <div>
          <img src="https://i.ibb.co/jLcBff6/aboutbanner.png" alt="" />
        </div>
      </div>
      {/* Our Vision */}
      <div className="grid items-center grid-cols-1 gap-10 px-4 my-8 lg:grid-cols-2 md:px-8 lg:px-20 md:my-14 lg:my-20 ">
        <div>
          <img
            src="https://i.ibb.co/94mFCFh/Pngtree-online-course-learning-progress-vector-5752823-1.png"
            alt=""
          />
        </div>
        <div>
          <Title
            title={"Our Vision? "}
            heading1={" Seeding Ideas, Cultivating Success"}
          />
          <p className="my-5 text-lg text-justify text-paragraph">
            Embracing the motto, Seeding Ideas, Cultivating Success, DubaiBD IT
            Ltd. embodies a business philosophy centered on nurturing your
            concepts from inception to the realization of cutting-edge
            technologies. We excel at unraveling complexities that often arise
            in the digital evolution, orchestrating continuous innovation, and
            ensuring the seamless delivery of expected outcomes. Beyond being a
            mere resource provider, we prioritize our customers success as a
            core element of our own, sharing development risks and empowering
            them to boldly embrace new technologies. At DubaiBD IT Ltd., we are
            dedicated to sowing the seeds of innovation and cultivating success
            in every project we undertake.
          </p>
          <Button title={"Contact Us"} />
        </div>
      </div>
      {/* who we are */}
      <div className="grid items-center grid-cols-1 gap-10 px-4 lg:grid-cols-2 md:px-8 lg:px-20 ">
        <div>
          <Title
            title={"Our Mission "}
            heading1={"Commitment to Unmatched Quality"}
          />
          <p className="my-5 text-lg text-justify text-paragraph">
            As the reflection of your vision, DubaiBD IT Ltd. is a global leader
            in providing comprehensive software services. Our commitment to
            generating tangible value for our clients sets us apart. At DubaiBD
            IT Ltd., we distinguish ourselves with unparalleled attention to
            detail and a commitment to unmatched quality in the industry. Our
            mission is to empower forward-thinking businesses to undergo
            transformation, scale effectively, and attain a competitive
            advantage through the expert delivery of innovative and customized
            software solutions. We strive to craft elegant, data-driven
            solutions that enhance the performance of organizations and
            individuals worldwide, enabling them to achieve better outcomes with
            efficiency and excellence.
          </p>
          <Button title={"Contact Us"} />
        </div>
        <div>
          <img src="https://i.ibb.co/jLcBff6/aboutbanner.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
