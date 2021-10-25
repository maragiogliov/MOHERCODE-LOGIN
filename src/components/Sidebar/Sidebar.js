import { useState } from 'react';

import './Menu.scss';
import './Sidebar.scss';
import SideBarMenu from './layout/sidebar/SideBarMenu';
import Menu from './layout/sidebar/Menu';

import { GlobalAppContext } from './context';

function Sidebar() {
    const [toggled, setToggled] = useState(true);

    let isOpen = toggled ? 'toggled' : '';

    return (
        <GlobalAppContext.Provider value={{ toggled, setToggled }}>
            <div className={'page-wrapper default-theme'}>
                <SideBarMenu />
                <div className={`menu-full ${isOpen}`}>
                    <Menu />
                </div>
            </div>
        </GlobalAppContext.Provider>
    );
}

export default Sidebar;
