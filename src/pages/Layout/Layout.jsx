import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import SideBar from "./SideBar"

const Layout = () => {
    return (
        <div className="w-full h-screen flex " >
            <div className="h-full bg-[#F5F8FF] w-5/6 flex flex-col" >
                <NavBar />
                <div className="bg-[#F5F8FF] w-full h-[calc(100%-81.3px)]" >
                    <Outlet />
                </div>
            </div>
            <SideBar />
        </div>
    )
}

export default Layout
