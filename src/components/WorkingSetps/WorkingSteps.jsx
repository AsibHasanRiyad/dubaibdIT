import Number from "../../shared/Number";
import Title from "../../shared/Title";

const WorkingSteps = () => {
  return (
    <div className="bg-paragraph">
      <div className=" relative z-50 max-w-[1440px] mx-auto  px-4 md:px-14 xl:px-[70px] pt-9 pb-16">
        {/* title */}
        <div className=" flex justify-end">
          <Title
            title={"How We Works"}
            heading1={"Our Easy Working Steps "}
            heading2={"To Do Start A Project"}
            color={"text-gray-100"}
          />
        </div>
        {/* steps */}
        <div className=" z-40 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-14 text-center pt-8 md:pt-20">
          <div className=" flex flex-col items-center space-y-3">
            <div className=" relative">
              <img
                className=" w-[72px] md:w-[142px]"
                src="https://i.ibb.co/VH2r4sx/Work-Step-Option.png"
                alt=""
              />
              <div className=" absolute -left-5 -top-5 md:-left-12 md:-top-12">
                <Number number={"01"} />
              </div>
            </div>
            <h1 className=" text-[22px] lg:text-[28px] font-medium text-primary">
              Visit Project
            </h1>
            <p className=" text-[12px] lg:text-[14px] text-gray-100">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper euismod eget
              laoreet volutpat egestas posuere urna phasellus.
            </p>
          </div>
          {/*  2*/}
          <div className=" flex flex-col items-center space-y-3 mt-8 md:mt-0">
            <div className=" relative">
              <img
                className=" w-[72px] md:w-[142px]"
                src="https://i.ibb.co/1dt1fwZ/Work-Step-Option-1.png"
                alt=""
              />
              <div className=" absolute -left-5 -top-5 md:-left-12 md:-top-12">
                <Number number={"02"} />
              </div>
            </div>
            <h1 className=" text-[22px] lg:text-[28px] font-medium text-primary">
              Planning Design
            </h1>
            <p className=" text-[12px] lg:text-[14px] text-gray-100">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper euismod eget
              laoreet volutpat egestas posuere urna phasellus.
            </p>
          </div>
          {/* 3 */}
          <div className=" flex flex-col items-center space-y-3">
            <div className=" relative">
              <img
                className=" w-[72px] md:w-[142px]"
                src="https://i.ibb.co/M6RndKf/Work-Step-Option-2.png"
                alt=""
              />
              <div className=" absolute -left-5 -top-5 md:-left-12 md:-top-12">
                <Number number={"03"} />
              </div>
            </div>
            <h1 className=" text-[22px] lg:text-[28px] font-medium text-primary">
              Project Sketch
            </h1>
            <p className=" text-[12px] lg:text-[14px] text-gray-100">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper euismod eget
              laoreet volutpat egestas posuere urna phasellus.
            </p>
          </div>
          {/* 4 */}
          <div className=" flex flex-col items-center space-y-3 mt-8 md:mt-0">
            <div className=" relative">
              <img
                className=" w-[72px] md:w-[142px]"
                src="https://i.ibb.co/7N09nNJ/Work-Step-Option-3.png"
                alt=""
              />
              <div className=" absolute -left-5 -top-5 md:-left-12 md:-top-12">
                <Number number={"04"} />
              </div>
            </div>
            <h1 className=" text-[22px] lg:text-[28px] font-medium text-primary">
              Start Working
            </h1>
            <p className=" text-[12px] lg:text-[14px] text-gray-100">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper euismod eget
              laoreet volutpat egestas posuere urna phasellus.
            </p>
          </div>
        </div>
        {/* large device svg */}
        <div className=" hidden lg:block w-[950px] xl:w-[1392px] h-[400px] xl:h-[472px] absolute top-10 xl:-top-14 left-0 -z-50">
          <svg
            viewBox="0 0 1392 472"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M-111.509 2.49902C-77.3711 28.6014 10.2966 83.1941 87.8641 92.7466C184.824 104.687 288.902 51.3013 353.379 79.6217C417.857 107.942 418.054 196.632 501.226 201.038C584.398 205.445 616.21 122.752 690.131 120.875"
              stroke="#FF7749"
              strokeWidth="4"
              strokeDasharray="8 8"
            />
            <path
              opacity="0.3"
              d="M39 352.993C102.7 383.491 262.138 441.886 390.293 431.487C550.487 418.488 700.379 298.498 813.7 322.496C927.02 346.494 956.895 488.482 1092.36 467.984C1227.83 447.485 1251.53 304.498 1370 277"
              stroke="#FF7749"
              strokeWidth="4"
              strokeDasharray="8 8"
            />
            <circle cx="31" cy="347" r="12" fill="#FF7749" />
            <circle cx="1380" cy="273" r="12" fill="#FF7749" />
            <path
              d="M689.865 138.684L689.683 100.969C689.676 99.5501 691.108 98.5755 692.425 99.1023L737.235 117.019C738.879 117.676 738.922 119.986 737.304 120.704L692.676 140.503C691.357 141.088 689.872 140.127 689.865 138.684Z"
              fill="white"
            />
            <circle opacity="0.5" cx="170" cy="157" r="15" fill="white" />
            <g opacity="0.4">
              <circle cx="515" cy="125" r="14.5" stroke="#FF7749" />
              <circle cx="515" cy="125" r="9.5" stroke="#FF7749" />
              <circle cx="515" cy="125" r="19.5" stroke="#FF7749" />
            </g>
          </svg>
        </div>
        {/* small device svg */}
        <div className=" block md:hidden absolute top-5 left-0 -z-50">
          <svg
            width="420"
            height="488"
            viewBox="0 0 387 488"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M-24.4926 1.22218C-17.5732 6.51285 0.196146 17.5782 15.9183 19.5144C35.5709 21.9346 56.6665 11.1139 69.7354 16.8541C82.8044 22.5944 82.8444 40.5709 99.7025 41.464C116.561 42.3572 123.008 25.5962 137.992 25.2157"
              stroke="#FF7749"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
            <path
              d="M133.878 29.491L133.826 18.7607C133.819 17.3418 135.251 16.3672 136.568 16.894L149.317 21.9914C150.96 22.6484 151.003 24.9589 149.386 25.6766L136.689 31.3095C135.37 31.8945 133.885 30.9336 133.878 29.491Z"
              fill="white"
            />
            <g opacity="0.4">
              <circle cx="102.518" cy="14.9482" r="9.96112" stroke="#FF7749" />
              <circle cx="102.518" cy="14.948" r="6.47408" stroke="#FF7749" />
              <circle cx="102.518" cy="14.9482" r="13.4482" stroke="#FF7749" />
            </g>
            <path
              opacity="0.3"
              d="M12.0476 167.85C29.492 176.751 73.1547 193.794 108.25 190.759C152.12 186.965 193.168 151.944 224.202 158.949C255.235 165.953 263.416 207.394 300.515 201.412C337.614 195.429 344.102 153.696 376.546 145.67"
              stroke="#FF7749"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
            <circle cx="8.57031" cy="165" r="5" fill="#FF7749" />
            <circle cx="380.57" cy="144" r="5" fill="#FF7749" />
            <path
              opacity="0.3"
              d="M14.4153 411.971C30.4191 423.259 71.2195 446.329 106.391 448.307C150.354 450.781 195.959 421.943 225.684 433.282C255.408 444.622 257.622 486.805 295.195 486.15C332.767 485.496 345.116 445.107 378.37 441.769"
              stroke="#FF7749"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
            <circle
              cx="12.226"
              cy="409.788"
              r="4.54362"
              transform="rotate(8.16269 12.226 409.788)"
              fill="#FF7749"
            />
            <ellipse
              cx="381.479"
              cy="441.036"
              rx="4.75475"
              ry="4.72865"
              transform="rotate(8.16269 381.479 441.036)"
              fill="#FF7749"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WorkingSteps;
