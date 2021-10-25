import React, { useState } from 'react';

import menuConfig from './MenuConfig';

import DropdownMenu from './DropdownMenu';
import SimpleMenu from './SimpleMenu';

import userImage from '../../images/user.jpg';

function Menu() {
    let initialMenuItems = [];
    menuConfig.menus.forEach((menu, index) => {
        let active = menu.active ? menu.active : false;
        initialMenuItems.push({
            active: active,
        });
    });

    const [menuItems, setMenuItems] = useState(initialMenuItems);

    const handleMenuDropDownClick = (e, index) => {
        let newArray = menuItems.map((item, idx) => {
            // check if index equal to current clicked so put inverse value otherwise set to false (collapse other menu)
            index === idx
                ? (item.active = !item.active)
                : (item.active = false);
            return item;
        });
        setMenuItems([...newArray]);
    };

    const renderSideBarMenuItem = () => {
        return !menuConfig['menus'].length
            ? ''
            : menuConfig.menus.map((menu, index) => {
                  let liElementList = '';
                  if (menu.type === 'dropdown') {
                      liElementList = (
                          <DropdownMenu
                              menu={menu}
                              active={menuItems[index].active}
                              key={'sidebar' + index}
                              handleClick={(e) =>
                                  handleMenuDropDownClick(e, index)
                              }
                          />
                      );
                  } else if (menu.type === 'simple') {
                      liElementList = <SimpleMenu menu={menu} />;
                  }
                  return liElementList;
              });
    };

    return (
        <nav id="menu" className="menu-wrapper">
            <div className="menu-content">
                <div className="menu--item menu-header d-flex flex-nowrap">
                    <div className="user-pic">
                        <img
                            className="img-responsive img-rounded"
                            src={userImage}
                            alt="User "
                        />
                    </div>
                    <div className="user-info">
                        <span className="user-name">
                            Bob
                            <strong> Example</strong>
                        </span>

                        {/* <span className="user-status">
                            <i className="fa fa-circle"></i>
                            <span> Online</span>
                        </span> */}
                    </div>
                </div>
                <div className="menu--item menu-search">
                    <div>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control search-menu"
                                placeholder="Search..."
                            />
                            <div className="input-group-append">
                                <span className="input-group-text">
                                    <i
                                        className="fa fa-search"
                                        aria-hidden="true"
                                    ></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-menu">
                    <ul>{renderSideBarMenuItem()}</ul>
                </div>

                <div className="sidebar-footer">
                    <div>
                        <a href="#t">
                            <i className="fa fa-bell"></i>
                        </a>
                    </div>
                    <div>
                        <a href="#t">
                            <i className="fa fa-envelope"></i>
                        </a>
                    </div>
                    <div>
                        <a href="#t">
                            <i className="fa fa-cog"></i>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Menu;
