const Field = ({ label, name, value, action }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>

            <input
                autoComplete="off"
                id={name}
                name={name}
                type={name}
                value={value}
                onChange={action}
                placeholder={`${name}`[0].toUpperCase() + `${name}`.slice(1)}
            />
        </div>
    );
};

export default Field;
