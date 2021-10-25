import { useContext } from 'react';

import SideBarConfig from './SidebarConfig';
import SideBarItem from './SideBarItem';

import { GlobalAppContext } from './../../context';

function SideBarMenu() {
    const { toggled, setToggled } = useContext(GlobalAppContext);
    let initialMenuItems = [];
    SideBarConfig.menus.forEach((menu) => {
        let active = menu.active ? menu.active : false;
        initialMenuItems.push({
            active: active,
        });
    });

    const renderSideBarMenuItem = () => {
        return !SideBarConfig['menus'].length
            ? ''
            : SideBarConfig.menus.map((menu, index) => (
                  <SideBarItem key={index} menu={menu} />
              ));
    };
    const toggleHandler = () => {
        setToggled(!toggled);
    };
    return (
        <nav id="sidebar" className="sidebar-wrapper">
            <div className="sidebar-content">
                <div className="sidebar-item sidebar--logo">
                    <a href="/">
                        <img
                            height="35px"
                            src="https://i.postimg.cc/9Mfc5w3j/mothercodelogo.png"
                            alt="mothercode logo"
                        />
                    </a>
                </div>
                <div className=" sidebar-item sidebar-menu">
                    <ul>{renderSideBarMenuItem()}</ul>
                </div>
            </div>
            <div className="sidebar-footer">
                <div>
                    <a href="#t" onClick={toggleHandler}>
                        <i
                            className={`fa fa-cog ${
                                toggled ? 'red-color' : 'green-color'
                            }`}
                        ></i>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default SideBarMenu;
