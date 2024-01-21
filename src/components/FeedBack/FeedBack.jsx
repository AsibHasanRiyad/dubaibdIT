import Title from "../../shared/Title";

const FeedBack = () => {
  return (
    <div className=" max-w-[1440px] mx-auto">
      <div className=" relative pt-14 lg:pt-[120px] pb-[160px]">
        {/* Title */}
        <div className="px-4 md:px-14 xl:px-[70px]">
          <Title
            title={"Video & Feedback"}
            heading1={"Let's See The Video & "}
            heading2={"What Client Say About Our Project"}
          />
        </div>
        {/* main image div */}
        <div className="pt-5 md:pt-10">
          <div className="relative ">
            <img
              className=" min-h-[361px]"
              src="https://i.ibb.co/QNBgbrP/Untitled-design-1.jpg"
              alt=""
            />

            {/* What our client says  card*/}
            <div className=" absolute top-52 md:top-32 xl:top-52 right-8 lg:right-16 h-[243px] md:h-[350px] w-[243px] md:w-[350px] lg:h-fit lg:w-fit max-w-[440px] bg-white text-center py-2 md:py-9 shadow-lg shadow-gray-300">
              <h1 className=" text-base lg:text-[22px] font-medium text-heading pb-2 md:pb-3">
                WHAT CLIENT&apos;S SAY?
              </h1>
              <div className=" h-[1px] bg-primary w-full"></div>
              <p className=" hidden lg:block mt-2 mb-14 text-[14px] px-4 md:text-base text-paragraph text-center">
                Dubai Bangla IT Company has exceeded our expectations. Their
                expertise and commitment to excellence have streamlined our
                operations and enhanced security. Effective communication and
                innovative solutions make them a reliable partner.
              </p>
              <p className=" block lg:hidden mt-2 mb-4 text-[12px] px-4 md:px-0 md:text-base text-paragraph text-center">
                Dubai Bangla IT Company has exceeded our expectations. Their
                expertise streamlined our operations and enhanced security.
              </p>

              {/* client info */}
              <div className="flex flex-col items-center justify-center ">
                <img
                  className=" w-[56px] md:w-[72px] h-[56px] md:h-[72px]"
                  src="https://i.ibb.co/nfbsZRY/Ellipse-88.png"
                  alt=""
                />
                <h1 className=" text-base lg:text-[22px] font-medium text-heading">
                  Johan Smith
                </h1>
                <p className=" text-[14px] md:text-base text-paragraph">
                  Manager Of Alco. LTD
                </p>
                {/* dot */}
                <div className="pt-2 lg:pt-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="18"
                    viewBox="0 0 60 18"
                    fill="none"
                  >
                    <circle cx="30" cy="8.99975" r="3.44262" fill="#D5D2DA" />
                    <circle
                      cx="56.5574"
                      cy="8.99975"
                      r="3.44262"
                      fill="#D5D2DA"
                    />
                    <circle
                      cx="3.44262"
                      cy="8.99975"
                      r="3.44262"
                      fill="#D5D2DA"
                    />
                    <circle
                      cx="29.9999"
                      cy="8.99992"
                      r="8.35246"
                      stroke="#FF7749"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* view promo video */}
            <div className="absolute flex flex-col items-center justify-center top-8 left-14 md:top-20 md:left-24 xl:top-36 xl:left-48">
              <div className="h-[62px] w-[62px] md:h-[100px] md:w-[100px]">
                <svg
                  viewBox="0 0 114 114"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="57.0001" cy="57.0002" r="43.1818" fill="white" />
                  <circle cx="57" cy="57.0001" r="49.5909" stroke="white" />
                  <circle cx="57" cy="57" r="56.5" stroke="white" />
                  <path
                    d="M49.2272 67.4326L69.0908 56.1362L49.2272 44.8398V67.4326Z"
                    stroke="#FF7749"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h1 className=" text-base lg:text-[22px] text-gray-100 font-normal md:font-medium ">
                VIEW PROMO VIDEO
              </h1>
            </div>
          </div>
        </div>
        {/* large device svg */}
        <div className=" absolute w-[800px] lg:w-[1200px] xl:w-[1440px] h-[200px] xl:h-[350px] -top-5 lg:-top-10 xl:-top-14 left-0 hidden md:block">
          <svg
            viewBox="0 0 1440 350"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M1620.73 348.123C1593.71 327.467 1524.33 284.264 1462.95 276.705C1386.22 267.255 1303.86 309.503 1252.83 287.091C1201.81 264.679 1201.65 194.494 1135.83 191.006C1070.01 187.519 1044.84 252.96 986.337 254.445"
              stroke="#FF7749"
              strokeWidth="4"
              strokeDasharray="8 8"
            />
            <path
              d="M986.55 240.989L986.689 269.578C986.695 270.997 985.264 271.971 983.946 271.445L949.979 257.864C948.336 257.207 948.293 254.896 949.911 254.178L983.739 239.171C985.058 238.586 986.543 239.547 986.55 240.989Z"
              fill="#FF7749"
            />
            <g opacity="0.4">
              <circle
                cx="1119.83"
                cy="298.827"
                r="11.3704"
                transform="rotate(180 1119.83 298.827)"
                stroke="#FF7749"
              />
              <circle
                cx="1119.83"
                cy="298.828"
                r="7.41363"
                transform="rotate(180 1119.83 298.828)"
                stroke="#FF7749"
              />
              <circle
                cx="1119.83"
                cy="298.827"
                r="15.3273"
                transform="rotate(180 1119.83 298.827)"
                stroke="#FF7749"
              />
            </g>
            <path
              opacity="0.3"
              d="M-92.4228 2.38512C-57.62 28.9958 31.7551 84.6518 110.833 94.3903C209.681 106.563 315.786 52.1379 381.519 81.0098C447.253 109.882 447.454 200.299 532.246 204.791C617.037 209.283 649.469 124.98 724.829 123.066"
              stroke="#FF7749"
              strokeWidth="4"
              strokeDasharray="8 8"
            />
            <path
              d="M724.559 141.283L724.373 102.716C724.366 101.297 725.798 100.322 727.115 100.849L772.937 119.17C774.581 119.827 774.624 122.137 773.006 122.855L727.37 143.101C726.051 143.686 724.566 142.725 724.559 141.283Z"
              fill="#FF7749"
            />
            <g opacity="0.4">
              <circle cx="546.288" cy="127.272" r="14.7921" stroke="#FF7749" />
              <circle cx="546.287" cy="127.271" r="9.69475" stroke="#FF7749" />
              <circle cx="546.287" cy="127.272" r="19.8895" stroke="#FF7749" />
            </g>
          </svg>
        </div>
        {/* mobile and tablet svg */}
        <div className="absolute block -top-3 -left-5 md:hidden">
          <svg
            width="450"
            height="143"
            viewBox="0 0 390 143"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M493.453 130.339C484.356 123.383 460.994 108.835 440.323 106.289C414.485 103.107 386.749 117.334 369.567 109.787C352.384 102.24 352.332 78.6051 330.167 77.4308C308.003 76.2566 299.526 98.2932 279.827 98.7934"
              stroke="#FF7749"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
            <path
              d="M279.909 96.2912L279.936 101.92C279.943 103.339 278.511 104.314 277.193 103.787L270.505 101.113C268.862 100.456 268.819 98.1454 270.437 97.4277L277.098 94.4727C278.416 93.8877 279.902 94.8487 279.909 96.2912Z"
              fill="#FF7749"
            />
            <g opacity="0.4">
              <circle
                cx="331.341"
                cy="97.4807"
                r="6.19115"
                transform="rotate(180 331.341 97.4807)"
                stroke="#FF7749"
              />
              <circle
                cx="331.341"
                cy="97.4806"
                r="3.96077"
                transform="rotate(180 331.341 97.4806)"
                stroke="#FF7749"
              />
              <circle
                cx="331.34"
                cy="97.4808"
                r="8.42154"
                transform="rotate(180 331.34 97.4808)"
                stroke="#FF7749"
              />
            </g>
            <path
              opacity="0.3"
              d="M-27.2299 11.0834C-18.914 17.4419 2.44159 30.7405 21.3368 33.0675C44.9558 35.9762 70.3089 22.9715 86.0155 29.8703C101.722 36.769 101.77 58.3737 122.031 59.447C142.291 60.5204 150.04 40.3767 168.047 39.9194"
              stroke="#FF7749"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
            <path
              d="M167.972 41.9438L167.949 37.3162C167.942 35.8972 169.374 34.9226 170.692 35.4494L176.19 37.6478C177.833 38.3048 177.876 40.6153 176.258 41.333L170.783 43.7623C169.464 44.3473 167.978 43.3864 167.972 41.9438Z"
              fill="#FF7749"
            />
            <g opacity="0.4">
              <circle cx="125.386" cy="40.9248" r="5.60886" stroke="#FF7749" />
              <circle cx="125.386" cy="40.9246" r="3.57257" stroke="#FF7749" />
              <circle cx="125.386" cy="40.9244" r="7.64515" stroke="#FF7749" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
