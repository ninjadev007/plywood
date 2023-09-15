"use client"

import { useFormContext } from "@/context/FormContext"
import { FormStage } from "@/enums/enums"

const RentRolls = () => {
    const { setStage } = useFormContext()

    const handleCancel = () => setStage(FormStage.ONE)

    const handleNext = () => setStage(FormStage.THREE)

    return (
        <div className="flex flex-col w-full gap-8 h-full justify-between">
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>Song</th>
                        <th>Artist</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                    </tr>
                    <tr>
                        <td>Witchy Woman</td>
                        <td>The Eagles</td>
                        <td>1972</td>
                    </tr>
                    <tr>
                        <td>Shining Star</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                    </tr>
                </tbody>
            </table>
            <div className="flex flex-row gap-4 justify-end">
                <button onClick={handleCancel} className="py-3 px-4 rounded-lg font-bold text-teal-900">Cancel</button>
                <button onClick={handleNext} className="py-3 px-4 rounded-lg bg-teal-900 text-white">Continue</button>
            </div>
        </div>
    )
}

export default RentRolls