import { ITextInputProps } from "@/types/components"
import { IFormContext } from "@/types/context"
import { useFormikContext } from "formik"
import classNames from "classnames"
import React from "react"

const TextInput: React.FC<ITextInputProps> = ({ 
    fieldName, 
    label, 
    wrapperClassName, 
    labelClassName, 
    leftIcon,
    rightIcon,
    leftIconClass,
    rightIconClass,
    ...inputProps 
}) => {
    const { values, errors, touched, handleChange, setFieldTouched } = useFormikContext<IFormContext>()
    const isError = touched[fieldName] && !!errors[fieldName]

    return (
        <div className={classNames(
            "flex flex-col gap-2 w-full relative",
            wrapperClassName
        )}>
            {label ? <label className={classNames(
                "text-gray-500 text-sm",
                { "text-red-500": isError },
                labelClassName
            )}>{label}</label> : <></>}
            <div className="relative w-full h-max flex justify-center items-center">
                <input 
                    className={classNames(
                        "p-2 w-full border-2 border-gray rounded-lg",
                        { "border-red-500": isError },
                        { "pl-6": !!leftIcon }
                    )}
                    {...inputProps}
                    onChange={handleChange(fieldName)}
                    onBlur={() => setFieldTouched(fieldName)}
                    value={values[fieldName]}
                />
                {leftIcon ? <div className={classNames(
                    "absolute left-2",
                    leftIconClass,
                )}>{leftIcon}</div> : <></>}
                {rightIcon ? <div className={classNames(
                    "absolute right-2",
                    rightIconClass,
                )}>{rightIcon}</div> : <></>}
            </div>
            {isError ? <div className="absolute bottom-[-25px] text-sm text-red-500 truncate max-w-full">{errors[fieldName]}</div> : <></>}
        </div>
    )
}

export default TextInput