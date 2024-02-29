/* eslint-disable react/prop-types */

const Icon = ({ img }) => {
    return (
        <div className="bg-white ml-3 w-[40px] h-[40px] flex justify-center items-center rounded-full" >
            <img src={img} alt="Icon" width={24} height={24} />
        </div>
    )
}

export default Icon
