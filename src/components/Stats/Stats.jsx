import "./styles/Style.css";
const Stats = () => {
  return (
    <div className="bg-primary ">
      <div className="max-w-[1440px] mx-auto relative">
        <div className="  text-gray-100 grid grid-cols-2 lg:grid-cols-4 gap-10 py-[90px] lg:py-[120px] px-0 xl:px-[120px] mb-[0px] lg:mb-[120px]">
          <div className="text-center ">
            <h1 className=" text-[38px] md:text-[60px] font-bold text-stroke text-[#D5D2DA] ">
              300
            </h1>
            <p className=" text-[22px] md:text-[28px] font-medium">
              Projects Succeed
            </p>
          </div>
          <div className="text-center ">
            <h1 className="text-[38px] md:text-[60px] font-bold text-stroke text-[#D5D2DA] ">
              500
            </h1>
            <p className=" text-[22px] md:text-[28px] font-medium">
              Satisfied Clients
            </p>
          </div>
          <div className="text-center ">
            <h1 className="text-[38px] md:text-[60px] font-bold text-stroke text-[#D5D2DA] ">
              10
            </h1>
            <p className=" text-[22px] md:text-[28px] font-medium">
              Developers
            </p>
          </div>
          <div className="text-center ">
            <h1 className="text-[38px] md:text-[60px] font-bold text-stroke text-[#D5D2DA] ">
              4
            </h1>
            <p className=" text-[22px] md:text-[28px] font-medium">
              Year Of Experience
            </p>
          </div>
        </div>
        {/* svg */}
        <div className="flex items-center w-full px-10 mx-auto ">
          {/* Large device svg */}
          <div className="absolute left-0 hidden lg:block top-7">
            <svg
              width="1348"
              height="317"
              viewBox="0 0 1348 317"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M124.458 28.3052L93.4632 20.0002L85 51.5852L124.458 28.3052Z"
                fill="white"
              />
              <path
                opacity="0.2"
                d="M1344.46 293.305L1313.46 285L1305 316.585L1344.46 293.305Z"
                fill="white"
              />
              <path
                opacity="0.2"
                d="M741 0.541504L764 23.5416L787.541 0.000319499L741 0.541504Z"
                fill="white"
              />
              <path
                opacity="0.3"
                d="M20.5171 140.511C83.6584 183.3 241.67 265.188 368.586 250.427C527.23 231.976 675.498 63.1694 787.776 96.7676C900.054 130.366 929.874 329.884 1064.02 300.921C1198.16 271.959 1221.4 70.9742 1338.7 32.1938"
                stroke="white"
                strokeWidth="4"
                strokeDasharray="8 8"
              />
              <circle
                cx="12.4162"
                cy="134.36"
                r="12"
                transform="rotate(-0.807862 12.4162 134.36)"
                fill="white"
              />
              <circle
                cx="1335.42"
                cy="32.3599"
                r="12"
                transform="rotate(-0.807862 1335.42 32.3599)"
                fill="white"
              />
            </svg>
          </div>
          {/* for mobile and tablet */}
          <div className=" block lg:hidden w-[430px] md:w-[800px] h-[450px] overflow-hidden absolute top-8 left-0 ">
            <svg
              // height="344"
              viewBox="0 0 390 344"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M-37.1415 72.9856C-14.0802 88.6135 43.6306 118.522 89.9842 113.13C147.926 106.391 202.078 44.7381 243.086 57.0092C284.093 69.2803 294.984 142.151 343.978 131.573C392.972 120.995 401.459 47.5887 444.299 33.4248"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="8 8"
              />
              <path
                opacity="0.3"
                d="M-36.5711 221.841C-13.5099 237.468 44.2009 267.377 90.5545 261.985C148.497 255.246 202.649 193.593 243.656 205.864C284.664 218.135 295.555 291.006 344.548 280.428C393.542 269.849 402.029 196.444 444.869 182.28"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="8 8"
              />
              <path
                opacity="0.2"
                d="M59.9033 26.3755L74.8544 15.3028L63.5212 -6.64363e-05L59.9033 26.3755Z"
                fill="white"
              />
              <path
                opacity="0.2"
                d="M330.57 9.52148L339.873 25.6337L356.364 16.1124L330.57 9.52148Z"
                fill="white"
              />
              <path
                opacity="0.2"
                d="M326.191 332.13L310.779 328L306.57 343.706L326.191 332.13Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
