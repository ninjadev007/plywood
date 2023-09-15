import { IFormProps } from "@/types/components"
import { Formik } from "formik"
import React from "react"

const Form: React.FC<IFormProps> = ({ wrapperClasses, children, ...formikProps }) => {
    return (
        <Formik {...formikProps}>
            {({ handleSubmit }) => <form className={wrapperClasses} onSubmit={handleSubmit}>
                {children as React.ReactNode}
            </form>}
        </Formik>
    )
}

export default Form