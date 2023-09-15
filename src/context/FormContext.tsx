"use client"

import { IFinancingState, IFormState, IPropertyDetailsState } from "@/types/context"
import React, { useContext, useState } from "react"
import { FormStage } from "@/enums/enums"

const initialState: IFormState = {
    stage: FormStage.ONE,
    setStage: () => {},
    propertyDetails: {},
    setPropertyDetails: () => {},
    financing: {},
    setFinancing: () => {},
}

const FormContext = React.createContext(initialState)

export const useFormContext = () => useContext(FormContext)

const FormProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [stage, setStage] = useState<FormStage>(FormStage.ONE)
    const [propertyDetails, setPropertyDetails] = useState<IPropertyDetailsState>({})
    const [financing, setFinancing] = useState<IFinancingState>({})
    
    return (
        <FormContext.Provider value={{ 
            stage,
            setStage,
            propertyDetails,
            setPropertyDetails,
            financing,
            setFinancing,
        }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormProvider