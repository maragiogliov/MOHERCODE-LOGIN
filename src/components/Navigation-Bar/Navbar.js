import { useContext } from 'react';

import { FaBell, FaLeanpub } from 'react-icons/fa';
//import { HiLogin } from 'react-icons/hi';
import '../../styles/navbar/_navbar.scss';
import DropdownMenu from './Dropdown/DropdownMenu';
import NavItem from './NavItem';
import Toggle from './Toggle';
import Avatar from './Avatar';

import { UserContext } from '../../contexts/UserContext';

const Navbar = (props) => {
    const [user, setUser] = useContext(UserContext);
    return (
        <nav className="navbar">
            <div className="navbar--logo">
                <a href="/">
                    <img
                        src="https://i.postimg.cc/9Mfc5w3j/mothercodelogo.png"
                        alt="mothercode logo"
                    />
                </a>
            </div>
            <Toggle user={user} />

            <ul className="navbar-nav">
                {/* <NavItem icon={<HiLogin />} /> */}
                <NavItem icon={<FaBell />} />
                <NavItem icon={<FaLeanpub />} />

                {/* <NavItem icon={<FaUser />}>
                    <DropdownMenu></DropdownMenu>
                </NavItem> */}
                <div className="navbar--avatar">
                    <Avatar user={user}>
                        <DropdownMenu></DropdownMenu>
                    </Avatar>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
