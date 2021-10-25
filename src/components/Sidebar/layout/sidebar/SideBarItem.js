const SideBarItem = ({ menu }) => {
    return (
        <li className="sidebar-simple">
            <a href="#s">
                <i className={`${menu.icon}`}></i>
            </a>
        </li>
    );
}

export default SideBarItem;
