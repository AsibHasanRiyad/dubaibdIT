/* eslint-disable react/prop-types */
import './Style/Style.css'

const Number = ({number}) => {
    return (
        <div className=" text-[22px] md:text-6xl font-bold text-stroke text-transparent ">
            {number}
        </div>
    );
};

export default Number;