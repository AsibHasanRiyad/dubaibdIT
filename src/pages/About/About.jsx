import Button from "../../shared/Button";
import Title from "../../shared/Title";

const About = () => {
  return (
    <div className="">
      {/* who we are */}
      <div className="grid items-center grid-cols-2 gap-10 px-4 md:px-8 lg:px-20 ">
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
    </div>
  );
};

export default About;
