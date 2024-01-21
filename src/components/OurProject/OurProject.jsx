import Title from "../../shared/Title";

// https://i.ibb.co/xmDHmVy/Untitled-design-2-4.jpg
// https://i.ibb.co/ctM1YX9/Untitled-design-2-3.jpg
// https://i.ibb.co/YXN7zNP/Untitled-design-2-2.jpg

const OurProject = () => {
  return (
    <div className=" max-w-[1440px] mx-auto relative px-4 md:px-14 xl:px-[70px] py-[46px] lg:py-[120px]">
      <div>
        <Title
          title={"Our Project"}
          heading1={"Our Outstanding Latest "}
          heading2={"Projects & Work"}
        />
      </div>
      {/* images */}
      <div className="grid grid-cols-1 gap-5 mt-5  md:grid-cols-2 md:gap-x-24 md:gap-y-14 xl:gap-24 md:mt-10">
        {/* image 1 */}
        <div className="relative ">
          <img
            className=" w-[284px] md:w-[384px] lg:w-[589px] "
            src="https://i.ibb.co/GFdzJsQ/Untitled-design-2.jpg"
            alt=""
          />
          <div className=" absolute top-10 right-2 md:-right-20 bg-[#252531] w-fit p-5">
            <h1 className=" text-[22px] md:text-[16px] xl:text-[28px] font-semibold text-primary">
              Architecture
            </h1>
            <p className=" text-[14px] md:text-[12px] xl:text-[22px] font-medium text-white">
              Bungalow Dark House
            </p>
          </div>
          <div className=" text-base font-normal xl:text-[22px] md:font-medium right-1/2 md:right-16 lg:right-28 xl:right-[200px] text-white absolute bottom-5">
            <h1 className="text-center ">Bungalow Dark House</h1>
          </div>
        </div>
        {/* image 2 */}
        <div className="relative ">
          <img
            className=" ml-28 md:ml-0 w-[284px] md:w-[384px] lg:w-[589px] "
            src="https://i.ibb.co/ctM1YX9/Untitled-design-2-3.jpg"
            alt=""
          />
          <div className=" absolute bottom-28 md:bottom-20 lg:bottom-28 left-2 md:-left-20 bg-[#252531] w-fit p-5">
            <h1 className=" text-[22px] md:text-[16px]  xl:text-[28px] font-semibold text-primary">
              Interior Design
            </h1>
            <p className=" text-[14px] md:text-[12px] xl:text-[22px] font-medium text-white max-w-44">
              Woodenist House Lumberjack
            </p>
          </div>
          <div className=" text-base font-normal xl:text-[22px] md:font-medium right-10  lg:right-28 xl:right-[200px] text-white absolute bottom-5">
            <h1 className="text-center ">Woodenist House Lumberjack</h1>
          </div>
        </div>
        {/* image 3 */}
        <div className="relative ">
          <img
            className=" w-[284px] md:w-[384px] lg:w-[589px] "
            src="https://i.ibb.co/HPTPJk6/2.jpg"
            alt=""
          />
          <div className=" absolute top-10 right-2 md:-right-20 bg-[#252531] w-fit p-5">
            <h1 className=" text-[22px] md:text-[16px] xl:text-[28px] font-semibold text-primary">
              Home Decor
            </h1>
            <p className=" text-[14px] md:text-[12px] xl:text-[22px] font-medium text-white">
              Bungalow Dark House
            </p>
          </div>
          <div className=" text-base font-normal xl:text-[22px] md:font-medium right-1/2 md:right-16 lg:right-28 xl:right-[200px] text-white absolute bottom-5">
            <h1 className="text-center ">Bungalow Dark House</h1>
          </div>
        </div>
        {/* image 4 */}

        <div className="relative ">
          <img
            className=" ml-28 md:ml-0 w-[284px] md:w-[384px] lg:w-[589px] "
            src="https://i.ibb.co/bHtNkL0/1.jpg"
            alt=""
          />
          <div className=" absolute bottom-28 md:bottom-20 lg:bottom-28 left-2 md:-left-20 bg-[#252531] w-fit p-5">
            <h1 className=" text-[22px] md:text-[16px]  xl:text-[28px] font-semibold text-primary">
              Urban Design
            </h1>
            <p className=" text-[14px] md:text-[12px] xl:text-[22px] font-medium text-white max-w-44">
              Woodenist House Lumberjack
            </p>
          </div>
          <div className=" text-base font-normal xl:text-[22px] md:font-medium right-10  lg:right-28 xl:right-[200px] text-white absolute bottom-5">
            <h1 className="text-center ">Woodenist House Lumberjack</h1>
          </div>
        </div>
      </div>
      {/* button */}
      <div className="flex items-center justify-center my-10 ">
        <button className=" bg-primary px-7 lg:px-12 py-3 lg:py-5 text-[18px] rounded-lg text-white ">
          Load More
        </button>
      </div>

      {/* large device svg */}
      <div className=" absolute w-[800px] lg:w-[1440px] -top-5 lg:-top-14 left-0 hidden md:block">
        <svg
          // height="406"
          viewBox="0 0 1440 406"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.3"
            d="M-113.509 2.49914C-79.371 28.6015 8.29675 83.1943 85.8642 92.7468C182.824 104.687 286.902 51.3015 351.379 79.6219C415.857 107.942 416.054 196.632 499.226 201.039C582.398 205.445 614.21 122.752 688.131 120.875"
            stroke="#FF7749"
            strokeWidth="4"
            strokeDasharray="8 8"
          />
          <path
            opacity="0.5"
            d="M687.865 138.684L687.683 100.969C687.676 99.5503 689.108 98.5757 690.426 99.1025L735.236 117.019C736.879 117.676 736.922 119.986 735.304 120.704L690.676 140.503C689.358 141.088 687.872 140.127 687.865 138.684Z"
            fill="#FF7749"
          />
          <path
            opacity="0.3"
            d="M1695.14 403.929C1661 377.827 1573.33 323.234 1495.77 313.682C1398.81 301.741 1294.73 355.127 1230.25 326.807C1165.77 298.486 1165.58 209.796 1082.4 205.39C999.232 200.984 967.42 283.677 893.499 285.554"
            stroke="#FF7749"
            strokeWidth="4"
            strokeDasharray="8 8"
          />
          <path
            opacity="0.5"
            d="M893.765 267.744L893.947 305.459C893.954 306.878 892.522 307.853 891.205 307.326L846.395 289.41C844.751 288.753 844.709 286.442 846.326 285.725L890.954 265.926C892.273 265.341 893.758 266.302 893.765 267.744Z"
            fill="#FF7749"
          />
          <g opacity="0.4">
            <circle cx="1207" cy="131" r="14.5" stroke="#FF7749" />
            <circle cx="1207" cy="131" r="9.5" stroke="#FF7749" />
            <circle cx="1207" cy="131" r="19.5" stroke="#FF7749" />
          </g>
          <g opacity="0.4">
            <circle cx="700" cy="310" r="14.5" stroke="#FF7749" />
            <circle cx="700" cy="310" r="9.5" stroke="#FF7749" />
            <circle cx="700" cy="310" r="19.5" stroke="#FF7749" />
          </g>
        </svg>
      </div>
      {/* mobile and tablet svg */}
      <div className="absolute left-0 block  -top-2 md:hidden">
        <svg
          width="450"
          height="132"
          viewBox="0 0 390 132"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.3"
            d="M-39.4428 1.65724C-27.6952 10.6396 2.47322 29.4263 29.1659 32.7135C62.5318 36.8225 98.3475 18.4512 120.536 28.1969C142.724 37.9426 142.792 68.4628 171.413 69.9791C200.034 71.4955 210.982 43.039 236.42 42.393"
            stroke="#FF7749"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
          <path
            opacity="0.5"
            d="M236.318 46.5153L236.275 37.4903C236.268 36.0714 237.7 35.0968 239.017 35.6236L249.74 39.9109C251.383 40.5679 251.426 42.8784 249.808 43.5961L239.129 48.3338C237.811 48.9188 236.325 47.9579 236.318 46.5153Z"
            fill="#FF7749"
          />
          <path
            opacity="0.3"
            d="M556.843 130.5C545.095 121.518 514.927 102.731 488.234 99.4441C454.868 95.3351 419.052 113.706 396.864 103.961C374.676 94.215 374.608 63.6948 345.987 62.1785C317.365 60.6621 306.418 89.1186 280.98 89.7646"
            stroke="#FF7749"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
          <path
            opacity="0.5"
            d="M281.082 85.6424L281.125 94.6674C281.132 96.0863 279.7 97.0609 278.383 96.5341L267.66 92.2468C266.017 91.5898 265.974 89.2793 267.592 88.5616L278.271 83.8239C279.589 83.2389 281.075 84.1998 281.082 85.6424Z"
            fill="#FF7749"
          />
          <g opacity="0.4">
            <circle cx="345.453" cy="95.8824" r="4.66184" stroke="#FF7749" />
            <circle cx="345.453" cy="95.8825" r="2.94123" stroke="#FF7749" />
            <circle cx="345.453" cy="95.8824" r="6.38245" stroke="#FF7749" />
          </g>
          <g opacity="0.4">
            <circle cx="176.453" cy="40.8824" r="4.66184" stroke="#FF7749" />
            <circle cx="176.453" cy="40.8825" r="2.94123" stroke="#FF7749" />
            <circle cx="176.453" cy="40.8825" r="6.38245" stroke="#FF7749" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default OurProject;
