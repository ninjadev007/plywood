"use client"

import { IFormButtonProps } from "@/types/components"
import { IFormContext } from "@/types/context"
import { useFormikContext } from "formik"

const FormButton: React.FC<IFormButtonProps> = ({ ...buttonProps }) => {
    const { handleSubmit } = useFormikContext<IFormContext>()
    return (
        <button {...buttonProps} onChange={() => handleSubmit()} />
    )
}

export default FormButton