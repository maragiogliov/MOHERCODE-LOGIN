import React from 'react';

function SimpleMenu(props) {
    let menu = props.menu;

    return (
        <li className="sidebar-simple">
            <a href="#s">
                <i className={menu.icon}></i>
                <span className="menu-text">{menu.title}</span>
            </a>
        </li>
    );
}

export default SimpleMenu;
