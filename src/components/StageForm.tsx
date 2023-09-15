"use client"

import { useFormContext } from "@/context/FormContext"
import PropertyDetails from "./PropertyDetaills"
import Congratulations from "./Congratulations"
import { FormStage } from "@/enums/enums"
import RentRolls from "./RentRolls"
import Financing from "./Financing"
import React from "react"

const StageForm = () => {
    const { stage } = useFormContext()

    const formMap = {
        [FormStage.ONE]: <PropertyDetails />,
        [FormStage.TWO]: <RentRolls />,
        [FormStage.THREE]: <Financing />,
        [FormStage.FOUR]: <Congratulations />,
    }

    return formMap[stage]
}

export default StageForm