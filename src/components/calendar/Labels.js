import React, { useContext } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import '../../styles/calendar/_calendar.scss';

const Labels = () => {
    const { labels, updateLabel } = useContext(GlobalContext);
    return (
        <>
            <p className=" module">Module</p>
            {labels.map(({ label: lbl, checked }, idx) => (
                <label key={idx} className=" label items-center mt-3 block">
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={() =>
                            updateLabel({ label: lbl, checked: !checked })
                        }
                        className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}
                    />
                </label>
            ))}
        </>
    );
};

export default Labels;
