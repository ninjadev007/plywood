import { useFormContext } from "@/context/FormContext"
import { FormStage } from "@/enums/enums"
import React from "react"

const Congratulations = () => {
    const { setStage } = useFormContext()

    const handleBack = () => setStage(FormStage.THREE)

    return (
        <div className="flex flex-col">
            <div className="text-4xl text-teal-500 h32 w-full flex justify-center items-center">Congratulations</div>
            <div className="flex flex-row gap-4 justify-center mt-20">
                <button onClick={handleBack} className="py-3 px-4 rounded-lg font-bold text-teal-900">Back</button>
            </div>
        </div>
    )
}

export default Congratulations