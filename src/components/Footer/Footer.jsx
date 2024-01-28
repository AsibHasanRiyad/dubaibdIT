const Footer = () => {
  return (
    <div className=" relative bg-[#343438] text-gray-100 text-justify">
      <div className="grid grid-cols-1 xl:grid-cols-3 px-4 md:px-14 xl:px-[70px] pt-8 md:pt-[80px] pb-[60px] gap-4 md:gap-8 xl:gap-14 ">
        {/* first part */}
        <div className="order-1 mb-4 md:order-none md:mb-0">
          <h1 className="text-4xl font-semibold md:text-5xl md:font-bold">
            Newsletter
          </h1>
          <p className=" py-4 md:text-[16px]">
            Our IT company leads with visionary solutions, propelling industries
            into a digital future. With expertise in cloud computing, AI,
            cybersecurity, and data analytics, we deliver tailored excellence.
          </p>
          {/* <div>
            <div className="inline-flex" role="group">
              <input className=" bg-[#D5D2DA] border-none " type="text" />
              <button className="bg-[#EF4B23] px-5 md:px-10 py-3 md:py-5 text-[16px]">
                ENTER
              </button>
            </div>
          </div> */}
        </div>
        {/* center part  */}
        <div className="grid order-3 grid-cols-1 gap-4 mt-5 md:order-none md:grid-cols-2 md:gap-8 lg:gap-14">
          {/* center part 1 */}
          <div>
            <h1 className=" text-[22px] mb-2 md:mb-7 font-medium">
              OUR SERVICES
            </h1>
            <div className="space-y-5 ">
              <h1 className="flex items-center gap-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12H19"
                    stroke="#EF4B23"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="#EF4B23"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Figma to HTML
              </h1>
              <h1 className="flex items-center gap-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12H19"
                    stroke="#EF4B23"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="#EF4B23"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                SQA
              </h1>
              <h1 className="flex items-center gap-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12H19"
                    stroke="#EF4B23"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="#EF4B23"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                IT Solution
              </h1>
              <h1 className="flex items-center gap-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12H19"
                    stroke="#EF4B23"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="#EF4B23"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Graphics Design
              </h1>
              <h1 className="flex items-center gap-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12H19"
                    stroke="#EF4B23"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="#EF4B23"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                B2B
              </h1>
            </div>
          </div>
          {/* center part 2 */}
          {/* <div>
            <h1 className=" text-[22px] mb-2 md:mb-7 font-medium">
              OUR SERVICES
            </h1>
            <div>
              <h1>Architecture</h1>
              <div className="flex gap-2 mt-1 ">
                <img src="https://i.ibb.co/LQcdzTb/Rectangle-595.png" alt="" />
                <img src="https://i.ibb.co/qFZm2qJ/Rectangle-598.png" alt="" />
                <img src="https://i.ibb.co/qFZm2qJ/Rectangle-598.png" alt="" />
              </div>
            </div>
            <div className="mt-2 ">
              <h1>Interior</h1>
              <div className="flex gap-2 mt-1 ">
                <img src="https://i.ibb.co/YW6nF71/Rectangle-596.png" alt="" />
                <img src="https://i.ibb.co/SmXVct0/Rectangle-602.png" alt="" />
                <img src="https://i.ibb.co/ssyYbNy/Rectangle-599.png" alt="" />
              </div>
            </div>
            <div className="mt-2 ">
              <h1>Decoration</h1>
              <div className="flex gap-2 mt-1 ">
                <img src="https://i.ibb.co/5Gh9Myh/Rectangle-603.png" alt="" />
                <img src="https://i.ibb.co/H4sF2kH/Rectangle-600.png" alt="" />
                <img src="https://i.ibb.co/qWXxHMh/Rectangle-597.png" alt="" />
              </div>
            </div>
          </div> */}
        </div>
        {/* last part  */}
        <div className="order-2 md:order-none">
          <div className="flex items-center gap-3">
            <h1 className="text-5xl font-bold text-gray-100">Dubai Bangla</h1>
          </div>
          <p className="py-6 ">
            Our IT company leads with visionary solutions, propelling industries
            into a digital future. With expertise in cloud computing, AI,
            cybersecurity, and data analytics, we deliver tailored excellence.
          </p>
          {/* icon */}
          <div className="flex gap-3 ">
            <button className=" p-3 bg-[#EF4B23]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className=" p-3 bg-[#EF4B23]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M23 3.00029C22.0424 3.67577 20.9821 4.1924 19.86 4.53029C19.2577 3.8378 18.4573 3.34698 17.567 3.12422C16.6767 2.90145 15.7395 2.95749 14.8821 3.28474C14.0247 3.612 13.2884 4.19469 12.773 4.95401C12.2575 5.71332 11.9877 6.61263 12 7.53029V8.53029C10.2426 8.57586 8.50127 8.1861 6.93101 7.39574C5.36074 6.60537 4.01032 5.43893 3 4.00029C3 4.00029 -1 13.0003 8 17.0003C5.94053 18.3983 3.48716 19.0992 1 19.0003C10 24.0003 21 19.0003 21 7.50029C20.9991 7.22174 20.9723 6.94388 20.92 6.67029C21.9406 5.66378 22.6608 4.393 23 3.00029Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className=" p-3 bg-[#EF4B23]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 11.3703C16.1234 12.2025 15.9812 13.0525 15.5937 13.7993C15.2062 14.5461 14.5931 15.1517 13.8416 15.53C13.0901 15.9082 12.2384 16.0399 11.4077 15.9062C10.5771 15.7726 9.80971 15.3804 9.21479 14.7855C8.61987 14.1905 8.22768 13.4232 8.09402 12.5925C7.96035 11.7619 8.09202 10.9102 8.47028 10.1587C8.84854 9.40716 9.45414 8.79404 10.2009 8.40654C10.9477 8.01904 11.7977 7.87689 12.63 8.0003C13.4789 8.12619 14.2648 8.52176 14.8716 9.12861C15.4785 9.73545 15.8741 10.5214 16 11.3703Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5 6.5H17.51"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className=" p-3 bg-[#EF4B23]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 9H2V21H6V9Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* copyright part */}
      <div>
        <div className=" h-[1px] relative bg-white w-full">
          <div className="flex justify-center ">
            <div className=" bg-[#EF4B23] rounded-full p-2 h-10 w-10 flex absolute right-8 md:right-1/2 -top-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 15L12 9L6 15"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* footer arrow */}
        <p className="py-5 text-center md:py-10">
          Copyright by Dubai Bangla © 2024. All rights reserved
        </p>
      </div>
      {/* mobile svg */}
      <div className="absolute right-0 block bottom-60 md:hidden">
        <svg
          width="201"
          height="286"
          viewBox="0 0 201 286"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.4">
            <circle cx="114.57" cy="20" r="14.5" stroke="#EF4B23" />
            <circle cx="114.57" cy="20" r="9.5" stroke="#EF4B23" />
            <circle cx="114.57" cy="20" r="19.5" stroke="#EF4B23" />
          </g>
          <path
            opacity="0.3"
            d="M359.804 271.563C342.404 277.541 299.405 287.84 266.608 281.215C225.612 272.933 190.572 237.156 160.55 239.926C130.527 242.696 118.436 278.689 84.0599 269.215C49.6838 259.741 47.9628 221.848 18.1948 211.074"
            stroke="#EF4B23"
            strokeWidth="4"
            strokeDasharray="8 8"
          />
          <path
            opacity="0.5"
            d="M16.4525 216.686L20.5279 204.658C20.9833 203.314 19.9333 201.937 18.5168 202.02L2.29475 202.97C0.528006 203.073 -0.243649 205.252 1.06397 206.444L13.2106 217.522C14.2764 218.494 15.9896 218.052 16.4525 216.686Z"
            fill="#EF4B23"
          />
        </svg>
      </div>
    </div>
  );
};

export default Footer;
