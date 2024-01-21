const Contact = () => {
  return (
    <div>
      <div className=" hidden md:block h-[2px] bg-primary"></div>
      {/* contact info div */}
      <div className=" flex items-center">
        <div className=" flex-auto flex justify-center items-center pt-10 pb-16 md:border-r-2 mt-6 md:mt-2 md:border-r-primary ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 108 10"
              fill="none"
              className="w-[64px] h-[6.5px] md:w-[108px] md:h-[10px] "
            >
              <rect y="0.5" width="88" height="3" fill="#FF7749" />
              <rect x="20" y="6.5" width="88" height="3" fill="#FF7749" />
            </svg>
            <div className=" pt-6">
              <h1 className=" text-primary">Phone</h1>
              <h1 className=" text-heading"> +1 203-123-0606</h1>
            </div>
          </div>
        </div>
        <div className=" block md:hidden h-24 w-[1px] bg-primary"></div>
        {/*  */}
        <div className=" flex-auto flex justify-center items-center pt-10 pb-16 md:border-r-2 mt-6 md:mt-2 border-r-primary ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 108 10"
              fill="none"
              className="w-[64px] h-[6.5px] md:w-[108px] md:h-[10px] "
            >
              <rect y="0.5" width="88" height="3" fill="#FF7749" />
              <rect x="20" y="6.5" width="88" height="3" fill="#FF7749" />
            </svg>
            <div className=" pt-6">
              <h1 className=" text-primary">Email </h1>
              <h1 className=" text-heading"> architecture@bauen.com</h1>
            </div>
          </div>
        </div>
        {/*  */}
        <div className=" hidden flex-auto md:flex justify-center items-center pt-10 pb-16 mt-2 ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 108 10"
              fill="none"
              className="w-[64px] h-[6.5px] md:w-[108px] md:h-[10px] "
            >
              <rect y="0.5" width="88" height="3" fill="#FF7749" />
              <rect x="20" y="6.5" width="88" height="3" fill="#FF7749" />
            </svg>
            <div className=" pt-6">
              <h1 className=" text-primary">Our Address </h1>
              <h1 className=" text-heading">
                24 King St, Charleston, SC 29401 USA
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
