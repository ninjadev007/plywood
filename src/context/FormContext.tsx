"use client"

import { FormStage } from "@/enums/enums"
import { IFormState } from "@/types/context"
import React, { useContext, useState } from "react"

const initialState: IFormState = {
    stage: FormStage.ONE,
    setStage: () => {},
}

const FormContext = React.createContext(initialState)

export const useFormContext = () => useContext(FormContext)

const FormProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [stage, setStage] = useState<FormStage>(FormStage.ONE)
    
    return (
        <FormContext.Provider value={{ stage, setStage }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormProvider