import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 items-center justify-center min-h-[90vh] mt-[80px] md:mt-[100px] lg:mt-[70px] gap-10 px-4 md:px-8  lg:px-20">
      <div className="flex items-center justify-center col-span-1 ">
        <div className="flex items-center justify-center ">
          <div className="flex flex-col my-0 space-y-4 text-black lg:space-y-6 lg:my-10">
            {/* header  */}

            <button className="px-6 py-2.5 text-base md:text-xl hover:scale-105 duration-300 font-medium bg-white rounded-full shadow-lg w-fit text-primary shadow-gray-200">
              Software Company
            </button>
            <h1 className=" text-3xl md:text-5xl font-semibold text-black text-start leading-[40px] md:leading-[65px] ">
              We Can Grow Your Business <br />
              Through Providing - <br />
              <span className=" text-primary">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    " Software Solution",
                    1000,
                    "App Development",
                    1000,
                    "Business Development",
                    1000,
                    " Website Design",
                    1000,
                    " Garments ERP Solution",
                    1000,
                    " E-Commerce Solution",
                    1000,
                  ]}
                  speed={50}
                  // style={{ fontSize: "2em" }}
                  repeat={Infinity}
                />
              </span>{" "}
            </h1>

            {/* description  */}
            <p className="text-sm md:text-xl text-start">
              DubaiBD IT Limited is a Leading Web Design, &nbsp;
              <span className="text-gray-400">
                Software & Online Service Provider Company in Bangladesh
              </span>
            </p>
            {/* buttons  */}
            <div className="flex flex-wrap items-center gap-5 py-4 lg:gap-10">
              <motion.button
                whileHover={{
                  scale: 1.2,
                }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 px-4 py-1.5 md:px-8 md:py-3 bg-gradient-to-b from-[#ff8863] to-[#E83E0D] text-white text-lg font-medium rounded-lg"
              >
                Contact{" "}
                <svg
                  width={25}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                      fill="white"
                    ></path>
                  </g>
                </svg>
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.2,
                }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 px-4 py-1.5 md:px-8 md:py-3 text-lg font-medium text-white rounded-lg bg-gradient-to-t from-black to-black/70"
              >
                View Pricing
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-1">
        <img
          className="w-3/4"
          src="https://i.ibb.co/pRbGHmD/app-img3.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
