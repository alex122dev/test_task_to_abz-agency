

export const Button = ({ text, clickFunc, className = 'btn', type = 'button', ...props }) => {
    return <button
        type={type}
        className={className}
        onClick={clickFunc}
        {...props}
    >{text}</button>
}