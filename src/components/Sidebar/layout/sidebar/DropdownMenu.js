import React /*, { useState } */ from 'react';
import { animated } from 'react-spring';
import { Spring } from 'react-spring/renderprops';

function DropdownMenu(props) {
    let closedStyle = {
        height: 0,
    };

    let openStyle = {
        height: 'auto',
    };

    // state used when trying to let all menu open
    //let [open, setOpen] =useState(props.active);

    const handleMenuDropDownClick = (e) => {
        props.handleClick();
        //setOpen(!open);
    };

    let menu = props.menu;
    let subMenus, subMenuContent, menuContent;

    if (menu.submenus.length) {
        subMenus = menu.submenus.map((submenu, index) => {
            return (
                <li key={index}>
                    <a href="#e"> {submenu.title}</a>
                </li>
            );
        });
        subMenuContent = (
            <Spring
                from={openStyle}
                to={props.active ? openStyle : closedStyle}
            >
                {(props) => (
                    <animated.div className="menu-submenu" style={props}>
                        <ul> {subMenus} </ul>
                    </animated.div>
                )}
            </Spring>
        );
    }
    const linkMenu = (
        <a
            href="#s"
            onClick={(e) => {
                handleMenuDropDownClick(e);
            }}
        >
            {/* <i className={menu.icon}></i> */}
            <span className="menu-text">{menu.title}</span>
        </a>
    );
    menuContent = (
        <>
            {' '}
            {linkMenu} {subMenuContent}{' '}
        </>
    );

    return (
        <li className={props.active ? 'menu-dropdown active' : 'menu-dropdown'}>
            {menuContent}
        </li>
    );
}

export default DropdownMenu;
