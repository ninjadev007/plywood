"use client"

import { useFormContext } from "@/context/FormContext"
import { FormStage } from "@/enums/enums"
import { data } from "@/data/data"
import { HiSelector } from "react-icons/hi"; 
import { MdOutlineFileDownload, MdOutlineFileUpload } from "react-icons/md"

const RentRolls = () => {
    const { setStage } = useFormContext()
    const handleCancel = () => setStage(FormStage.ONE)
    const handleNext = () => setStage(FormStage.THREE)

    const tableHeadings = ["ID", "Type", "Rent", "Width (ft)", "Length (ft)", "Market Rent", "Status", "SQFT/SQM"]

    return (
        <div className="flex flex-col w-60vw gap-8 h-full justify-between">
            <div className="flex w-full flex-row justify-between">
                <div className="text-2xl">Rent Roll</div>
                <div className="flex flex-row gap-4">
                    <div className="flex flex-row items-center gap-2 cursor-pointer">
                        <div className="text-xl"><MdOutlineFileDownload /></div>
                        <div className="text-teal-900 font-bold">Export template</div>
                    </div>
                    <div className="flex flex-row items-center gap-2 cursor-pointer">
                        <div className="text-xl"><MdOutlineFileUpload /></div>
                        <div className="text-teal-900 font-bold">Import file</div>
                    </div>
                </div>
            </div>
            <div className="overflow-y-auto h-full border border-gray-300 rounded-lg no-scrollbar">
                <table className="min-w-full table-auto overflow-x-auto">
                    <thead className="border text-gray-600 sticky top-0 bg-white">
                        <tr>
                            {tableHeadings.map((heading, index) => (
                                <th
                                    key={index}
                                    className={`py-3 px-5 font-semibold text-xs ${heading === "Type" ? "text-left" : heading === "Rent" ?  "text-right" : "text-center"}`}
                                >
                                    {heading}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((rentRoll, index) => (
                            <tr key={index} className="text-center text-sm text-gray-600">
                                <td className="border p-5">{rentRoll.id}</td>
                                <td className="flex justify-between items-center border-b p-5">
                                    <span className="text-gray-400">{ rentRoll.type }</span>
                                    <HiSelector className="cursor-pointer text-xl" />
                                </td>
                                <td className="border p-5 text-right">${rentRoll.rent}</td>
                                <td className="border p-5">{rentRoll.width}</td>
                                <td className="border p-5">{rentRoll.length}</td>
                                <td className="border p-5">
                                    {rentRoll.marketRent || ""}
                                </td>
                                <td className="border p-5">{rentRoll.status}</td>
                                <td className="border p-5">{rentRoll.sqm}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-row gap-4 justify-end">
                <button onClick={handleCancel} className="py-3 px-4 rounded-lg font-bold text-teal-900">
                    Cancel
                </button>
                <button onClick={handleNext} className="py-3 px-4 rounded-lg bg-teal-900 text-white">
                    Continue
                </button>
            </div>
        </div>
    )
}

export default RentRolls