const Button = ({ text, type, action, cls, name}) => {
    return (
        <>
            <button
                name={name}
                type={type}
                onClick={action}
                className={`button-${cls}`}
            >
                {text}
            </button>
        </>
    );
};

export default Button;
