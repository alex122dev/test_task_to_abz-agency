import cn from "classnames";

export const CustomInputComponent = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    label,
    blockClass,
    labelClass,
    errorBlockClass,
    className,
    showError = true,
    id,
    forwardRef,
    ...props
}) => (
    <div className={blockClass}>
        <input ref={forwardRef} id={id} className={cn(className, { 'error': errors[field.name] && touched[field.name] })}
            {...field} {...props} />
        {label && <label htmlFor={id} className={labelClass}>{label}</label>}
        {showError && touched[field.name] &&
            errors[field.name] && <div className={errorBlockClass}>{errors[field.name]}</div>}
    </div>
);


