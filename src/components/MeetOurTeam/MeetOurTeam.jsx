import Title from "../../shared/Title";

const MeetOurTeam = () => {
  return (
    <div className=" max-w-[1440px] mx-auto">
      <div className=" relative">
        <div className="px-4 md:px-14 xl:px-[70px] pt-14 lg:pt-[120px] ">
          <div>
            <Title
              title={"Meet Our Team"}
              heading1={"Let's See Our Expert"}
              heading2={"Engineer & Designer"}
            />
          </div>
          {/* member image */}
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 md:mt-10">
            <img src="https://i.ibb.co/2cj4p63/Team-Card-3.png" alt="" />
            <img src="https://i.ibb.co/h7JksvJ/Team-Card-2.png" alt="" />
            <img src="https://i.ibb.co/jH7H03s/Team-Card.png" alt="" />
            <img src="https://i.ibb.co/vX2Djxk/Team-Card-4.png" alt="" />
          </div>
          <div className=" flex justify-center mt-8">
            <svg
              width="122"
              height="36"
              viewBox="0 0 122 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="61" cy="18" r="7" fill="#D5D2DA" />
              <circle cx="115" cy="18" r="7" fill="#D5D2DA" />
              <circle cx="7" cy="18" r="7" fill="#D5D2DA" />
              <circle cx="61" cy="18" r="17.5" stroke="#FF7749" />
            </svg>
          </div>
        </div>
        {/* large svg */}
        <div className=" absolute -top-4 hidden lg:block">
          <svg
            width="1325"
            height="252"
            viewBox="0 0 1325 252"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M-27.3732 1.78342C31.9616 40.0866 182.742 118.163 311.184 124.043C471.736 131.394 635.59 31.3092 744.969 69.436C854.348 107.563 866.04 252.188 1003.01 248.975C1139.99 245.761 1181.56 106.914 1302.56 94.6093"
              stroke="#FF7749"
              strokeWidth="4"
              strokeDasharray="8 8"
            />
            <circle
              cx="1312.98"
              cy="91.9052"
              r="12"
              transform="rotate(7.26037 1312.98 91.9052)"
              fill="#FF7749"
            />
          </svg>
        </div>
        {/* mobile and tablet device svg */}
        <div className=" absolute block lg:hidden top-0 md:-top-4 w-[374px] md:w-[700px] h-[74px] md:h-[140px]">
          <svg
            viewBox="0 0 374 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M-15.5208 1.55518C1.4588 12.5162 44.6068 34.859 81.3624 36.5417C127.307 38.6451 174.196 10.0044 205.497 20.915C236.797 31.8256 240.143 73.2123 279.34 72.2927C318.537 71.3731 330.434 31.64 365.059 28.1187"
              stroke="#FF7749"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
            <circle
              cx="368.048"
              cy="27.3453"
              r="5.16532"
              transform="rotate(7.26037 368.048 27.3453)"
              fill="#FF7749"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
