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
            <input 
                className={classNames(
                    "p-2 w-full border-2 border-gray rounded-lg",
                    { "border-red-500": isError }
                )}
                {...inputProps}
                onChange={handleChange(fieldName)}
                onBlur={() => setFieldTouched(fieldName)}
                value={values[fieldName]}
            />
            {isError ? <div className="absolute bottom-[-25px] text-sm text-red-500">{errors[fieldName]}</div> : <></>}
        </div>
    )
}

export default TextInput