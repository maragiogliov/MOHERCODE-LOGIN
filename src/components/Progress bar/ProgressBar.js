import React, { useState } from 'react';
import '../../styles/progressBar/_progressBar.scss';

const ProgressBar = ({ done }) => {
    const [style, setStyle] = useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`,
        };

        setStyle(newStyle);
    }, 200);

    return (
        <div className="progress">
            <div className="progress--done" style={style}>
                {/* {done}% */}
            </div>
        </div>
    );
};

export default ProgressBar;
