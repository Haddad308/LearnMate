import breakLine from "../../assets/Icons/breakLineSide.svg"
import logo from "../../assets/Icons/logo.svg"
const SideBar = () => {
    return (
        <div className="h-full bg-[#F5F8FF] w-1/6 shadow-md font-cairo" >
            <header className="h-[80px] flex justify-center items-center gap-1" >
                <h1 className="font-bold text-2xl"  >LearnMate</h1>
                <img src={logo} alt="logo" width={52} />
            </header>
            <img src={breakLine} alt="breakLine" />
        </div>
    )
}

export default SideBar
