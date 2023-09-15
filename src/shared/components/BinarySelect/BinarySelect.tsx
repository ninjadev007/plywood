"use client"

import { IBinarySelectProps } from "@/types/components"
import { IFormContext } from "@/types/context"
import { useFormikContext } from "formik"
import classNames from "classnames"
import React from "react"

const BinarySelect: React.FC<IBinarySelectProps> = ({ options, fieldName, label }) => {
    const { values, setFieldValue, touched, errors } = useFormikContext<IFormContext>()
    const isError = touched[fieldName] && !!errors[fieldName]

    const handleSelect = (option: string) => {
        setFieldValue(fieldName, option)
    }

    return (
        <div className="flex flex-col gap-2 w-full relative">
            {label ? <label className={classNames(
                "text-gray-500 text-sm",
                { "text-red-500": isError },
            )}>{label}</label> : <></>}
            <div className={classNames(
                "flex flex-row border-2 border-gray-300 rounded-lg",
                { "border-red-500": isError }
            )}>
                {options?.map(option => <div className={classNames(
                    "p-2 text-lg text-black w-full flex justify-center items-center cursor-pointer",
                    { "bg-gray-300": option === values[fieldName] }
                )} onClick={() => handleSelect(option)} key={option}>{option}</div>)}
            </div>
            {isError ? <div className="absolute bottom-[-25px] text-sm text-red-500 truncate">{errors[fieldName]}</div> : <></>}
        </div>
    )
}

export default BinarySelect