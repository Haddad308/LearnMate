import { Menu } from "antd"
import breakLine from "../../assets/Icons/breakLineSide.svg"
import logo from "../../assets/Icons/logo.svg"
import Icon from "../../components/Icon";


import homeIcon from "../../assets/Icons/home.svg"
import studentsIcon from "../../assets/Icons/students.svg"
import classesIcon from "../../assets/Icons/classes.svg"
import couponsIcon from "../../assets/Icons/coupons.svg"
import messagesIcon from "../../assets/Icons/message.svg"
import rolesIcon from "../../assets/Icons/roles.svg"
import helpIcon from "../../assets/Icons/info.svg"


function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('الطلاب', '1', <Icon img={studentsIcon} />),
    getItem('الرئيسية', '2', <Icon img={homeIcon} />),
    getItem('الرسائل', '3', <Icon img={messagesIcon} />),
    getItem('الادوار', '4', <Icon img={rolesIcon} />),
    getItem('المساعده', '5', <Icon img={helpIcon} />),
    getItem('الصفوف', 'sub1', <Icon img={classesIcon} />, [
        getItem('Option 3', '3'),
        getItem('Option 4', '4'),
        getItem('Submenu', 'sub1-2', null, [getItem('Option 5', '5'), getItem('Option 6', '6')]),
    ]),
    getItem('الكوبونات', 'sub2', <Icon img={couponsIcon} />, [
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
    ])
];

const SideBar = () => {

    return (
        <div className="h-full bg-[#F5F8FF] w-1/6 shadow-md font-cairo" >
            <header className="h-[80px] flex justify-center items-center gap-1" >
                <h1 className="font-bold text-2xl"  >LearnMate</h1>
                <img src={logo} alt="logo" width={52} />
            </header>
            <img src={breakLine} alt="breakLine" />
            <Menu
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode={"inline"}
                theme={"light"}
                items={items}
                className="bg-inherit flex flex-col gap-2 text-lg font-bold"
                inlineIndent={15}
            >
                <Menu.Item>
                    fsfs
                </Menu.Item>
            </Menu>


        </div>
    )
}

export default SideBar
