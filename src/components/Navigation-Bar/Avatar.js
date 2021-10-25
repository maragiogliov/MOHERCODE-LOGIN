import { useState } from 'react';

const Avatar = ({ user: { avatar }, children, text }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="avatar">
                <img src={avatar} alt="Avatar" onClick={() => setOpen(!open)} />
                {text}
                {open && children}
            </div>
        </>
    );
};

export default Avatar;
