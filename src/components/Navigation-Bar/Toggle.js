import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../../styles/navbar/_toggle.scss';

const Toggle = ({ user: { userType } }) => {
    const [toggle, setToggle] = useState(false);
    const history = useHistory();

    const handleLink = () => {
        setToggle(!toggle);
        const link = toggle ? 'dash' : userType;
        history.push(`/${link}`);
    };

    return (
        <div className="toggle">
            <label className="toggle__label">
                <input type="checkbox" onClick={handleLink} />
                <span className="toggle__label--slider" />
            </label>
        </div>
    );
};

export default Toggle;
