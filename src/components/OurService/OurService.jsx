import { useEffect, useState } from "react";
import Title from "../../shared/Title";
import "./Style/service.css";

const OurService = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("cardData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  // console.log(data);
  return (
    <div className=" max-w-[1440px] mx-auto">
      <div className=" relative px-4 md:px-14 xl:px-[70px] my-[46px] lg:my-[120px]">
        <Title
          title={"Our Service"}
          color={"text-heading"}
          heading1={"We Provide Best  "}
          heading2={"Design and Performance"}
        />
        {/* cards */}
        <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2 lg:grid-cols-3 md:mt-12">
          {data?.map((card) => (
            <div
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              key={card.number}
              className="p-6 border-2 border-primary"
            >
              <div className="flex items-start justify-between ">
                <div className=" h-[108px] w-[108px] lg:w-[156px] lg:h-[156px] ">
                  <img src={card?.imageSrc} alt="" />
                </div>
                <h1 className=" text-stroke-2 text-[60px] font-bold text-transparent">
                  {card?.number}
                </h1>
              </div>
              <div>
                <h1 className=" text-heading font-semibold text-[28px] lg:text-5xl mt-5">
                  {card?.title}
                </h1>
                <p className=" max-w-[350px] text-[14px] lg:text-base text-paragraph py-2 lg:py-5">
                  {card?.description}
                </p>
                <button className=" bg-primary px-12 py-5 text-[18px] rounded-lg text-gray-100 ">
                  Get Service
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* bg svg laptop */}
        <div className=" absolute hidden lg:block top-0 right-0 w-[450px] xl:w-[629px]">
          <svg
            height="203"
            viewBox="0 0 629 203"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M850.139 200.929C816.001 174.827 728.333 120.234 650.766 110.682C553.807 98.7413 449.728 152.127 385.251 123.807C320.773 95.4864 320.576 6.79644 237.404 2.39003C154.232 -2.01638 122.42 80.6766 48.499 82.5537"
              stroke="#FF7749"
              strokeWidth="4"
              strokeDasharray="8 8"
            />
            <path
              opacity="0.5"
              d="M48.7649 64.7443L48.9471 102.459C48.9539 103.878 47.5221 104.853 46.2046 104.326L1.39453 86.4098C-0.248758 85.7527 -0.291733 83.4422 1.32599 82.7245L45.9539 62.9258C47.2725 62.3408 48.7579 63.3018 48.7649 64.7443Z"
              fill="#FF7749"
            />
          </svg>
        </div>
        {/* bg svg mobile and tab */}
        <div className="absolute top-0 right-0 block lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="183"
            height="76"
            viewBox="0 0 183 76"
            fill="none"
          >
            <path
              opacity="0.3"
              d="M236.464 63.0452C227.264 56.0105 203.637 41.2974 182.732 38.723C156.601 35.5049 128.552 49.8927 111.174 42.2602C93.7974 34.6277 93.7442 10.7254 71.329 9.5378C48.9138 8.35025 40.3403 30.6364 20.4182 31.1423"
              stroke="#FF7749"
              strokeWidth="3"
              strokeDasharray="8 8"
            />
            <path
              opacity="0.5"
              d="M20.3837 25.5929L20.4346 36.1416C20.4415 37.5605 19.0097 38.5351 17.6922 38.0083L5.15904 32.9972C3.51576 32.3402 3.47279 30.0297 5.0905 29.312L17.5726 23.7744C18.8913 23.1894 20.3767 24.1504 20.3837 25.5929Z"
              fill="#FF7749"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default OurService;
