const Message = ({ message, cls }) => {
    return (
        <>
            <h2 className={`message--${cls}`}>{message}</h2>
        </>
    );
};

export default Message;
