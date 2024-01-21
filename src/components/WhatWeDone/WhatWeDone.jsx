import Title from "../../shared/Title";

const WhatWeDone = () => {
  return (
    <div >
      <div className=" relative pt-[50px] lg:pt-[120px]">
      <div className=" max-w-[1440px] mx-auto">
      <div className="px-4 md:px-14 xl:px-[70px] ">
        <Title
          title={"What We Done"}
          color={"text-heading"}
          heading1={"Let's Have a Look What "}
          heading2={"We Have Done An Amazing Work!"}
        />
      </div>
      </div>
      {/* image section */}
      <div
        className=" mt-5 md:mt-10 py-[140px] lg:py-[240px] bg-gradient-to-r from-[#232358] to-transparent"
        style={{
          backgroundImage: `url('https://i.ibb.co/n6nLNk1/Untitled-design-1.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="px-4 md:px-14 xl:px-[70px] ">
            <Title
              title={"Discover"}
              color={"text-white"}
              heading1={"ONE STONE HOUSE"}
            />
            <h1 className=" flex items-center gap-3 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className=" text-[28px] font-medium">
                Dhaka, Bangladesh
              </span>
            </h1>
          </div>
        </div>
      </div>
      {/* large device svg */}
      <div className=" hidden lg:block w-[550px] xl:w-[809px] absolute top-0 left-1/4">
        <svg
          // width="809"
          // height="207"
          viewBox="0 0 809 207"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.3"
            d="M16.4503 18.7259C48.2892 43.0704 130.053 93.9866 202.397 102.896C292.826 114.032 389.895 64.2416 450.031 90.6547C510.166 117.068 510.35 199.785 587.921 203.895C665.492 208.004 695.161 130.88 764.104 129.13"
            stroke="#B98E75"
            strokeWidth="4"
            strokeDasharray="8 8"
          />
          <path
            d="M763.855 145.534L763.687 110.764C763.68 109.345 765.112 108.371 766.429 108.898L807.739 125.415C809.382 126.072 809.425 128.382 807.808 129.1L766.666 147.352C765.347 147.937 763.862 146.976 763.855 145.534Z"
            fill="#B98E75"
          />
          <g opacity="0.4">
            <circle cx="600.767" cy="132.977" r="13.4898" stroke="#B98E75" />
            <circle cx="600.767" cy="132.976" r="8.82655" stroke="#B98E75" />
            <circle cx="600.767" cy="132.977" r="18.1531" stroke="#B98E75" />
          </g>
          <circle
            opacity="0.8"
            cx="11.9131"
            cy="12.2034"
            r="11.5432"
            fill="#B98E75"
          />
        </svg>
      </div>
      {/* mobile svg */}
      <div className=" block md:hidden absolute top-14 right-8">
      <svg xmlns="http://www.w3.org/2000/svg" width="174" height="54" viewBox="0 0 174 54" fill="none">
  <path opacity="0.3" d="M5.84348 8.63845C12.3249 13.5942 28.9695 23.9592 43.6965 25.7729C62.1052 28.0399 81.8655 17.9041 94.1073 23.281C106.349 28.6579 106.386 45.4966 122.178 46.3332C137.969 47.1698 144.008 31.4697 158.043 31.1133" stroke="#B98E75" strokeWidth="1.5" strokeDasharray="8 8"/>
  <path d="M158.08 33.3763L158.049 26.969C158.042 25.5501 159.474 24.5755 160.791 25.1023L168.404 28.146C170.047 28.8031 170.09 31.1136 168.473 31.8313L160.891 35.1948C159.572 35.7798 158.087 34.8189 158.08 33.3763Z" fill="#B98E75"/>
  <g opacity="0.4">
    <circle cx="127.488" cy="13.9179" r="4.68841" stroke="#B98E75"/>
    <circle cx="127.488" cy="13.9179" r="2.95894" stroke="#B98E75"/>
    <circle cx="127.488" cy="13.9179" r="6.41788" stroke="#B98E75"/>
  </g>
  <circle opacity="0.8" cx="4.07031" cy="6.5" r="3.5" fill="#B98E75"/>
</svg>
      </div>
      </div>
    </div>
  );
};

export default WhatWeDone;
