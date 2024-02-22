import mainIcon from "../../assets/Icons/FavIcon.svg"
import elapse1 from "../../assets/Icons/Ellipse 3246.svg"
import elapse2 from "../../assets/Icons/Ellipse 3247.svg"
import { Outlet } from "react-router-dom";

const AuthPage = () => {
    return (
        <div className="h-screen flex" >
            <div className="flex flex-col justify-center relative items-center bg-gradient-to-r from-sky-500 to-indigo-500 h-full w-[60%]">
                <img src={mainIcon} alt="MainIcon" width={160} />
                <h1 className="font-cairo font-bold text-[45px] text-white" >LearnMate</h1>
                <div className="absolute bottom-0 right-0" >
                    <img src={elapse1} alt="elapse1" />
                </div>
                <div className="absolute top-0 left-0" >
                    <img src={elapse2} alt="elapse2" />
                </div>
            </div>
            <div className="h-full w-[40%] flex justify-center bg-[#FAFBFF]" >
                <Outlet />
            </div>
        </div>
    );
}

export default AuthPage;
