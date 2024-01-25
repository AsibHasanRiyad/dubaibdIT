/* eslint-disable react/prop-types */
const Title = ({ title, heading1, heading2, color }) => {
  return (
    <div className="">
      <div className={`${color}`}>
        <div className=" flex gap-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 108 10"
            fill="none"
            className="w-[64px] h-[6.5px] md:w-[108px] md:h-[10px] "
          >
            <rect y="0.5" width="88" height="3" fill="#EF4B23" />
            <rect x="20" y="6.5" width="88" height="3" fill="#EF4B23" />
          </svg>
          <h1 className=" text-base md:text-[28px] md:font-semibold">
            {title}
          </h1>
        </div>
        {/* heading */}
        <div className=" md:space-y-4 md:mt-4 ">
          <h1 className=" text-[22px] md:text-5xl font-medium md:font-bold">
            {heading1}
          </h1>
          <h1 className=" text-[22px]  md:text-5xl font-medium md:font-bold">
            {heading2}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Title;
