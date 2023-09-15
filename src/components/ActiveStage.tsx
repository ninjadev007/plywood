"use client"

import { useFormContext } from "@/context/FormContext"
import { FormStage } from "@/enums/enums"
import classNames from "classnames"
import React from "react"

const ActiveStage = () => {
    const { stage } = useFormContext()

    const items = [
        { stage: FormStage.ONE, text: "Property details" },
        { stage: FormStage.TWO, text: "Rent rolls" },
        { stage: FormStage.THREE, text: "Financing" },
        { stage: FormStage.FOUR, text: "Income and expenses" },
    ]

    return (
        <div className="flex flex-col gap-4">
            {items.map((item, index) => <div className="flex flex-col gap-4">
                <div key={item.stage} className={`flex flex-row items-center gap-2 cursor-pointer`}>
                    <div className={classNames(
                        `flex relative justify-center items-center rounded-full border-2 w-4 h-4 border-grey`,
                        { ["border-teal-500"]: stage === item.stage },
                        { ["bg-teal-900 border-teal-900"]: item.stage < stage }
                    )}>
                        {stage === item.stage ? <div className="bg-teal-500 h-2 w-2 rounded-full"></div> : <></>}
                        {item.stage < stage ? <div className="text-white text-sm">✓</div> : <></>}
                    </div>
                    <div className={`${stage === item.stage ? "text-teal-500" : "text-gray-500"}`}>{item.text}</div>
                </div>
                {index < items.length -1 ? <div className="flex flex-row items-center gap-2">
                    <div className="w-4 h-4 flex justify-center items-center">
                        <div className={classNames(
                            "w-[2px] h-full",
                            { "bg-teal-900": item.stage < stage },
                            { "bg-gray-300": item.stage > stage },
                            { "bg-teal-500": item.stage = stage },
                        )}></div>
                    </div>
                    <div></div>
                </div> : <></>}
            </div>)}
        </div>
    )
}

export default ActiveStage