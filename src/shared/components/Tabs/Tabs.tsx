"use client"

import { ITabsProps } from "@/types/components"
import React, { useState } from "react"
import classNames from "classnames"

const Tabs: React.FC<ITabsProps> = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState("")

    const handleSelect = (opt: string) => setSelectedOption(opt)

    return (
        <div className="w-full flex flex-row gap-4 border-b-[1px] border-gray-300">
            {options?.map(option => <div 
                onClick={() => handleSelect(option)}
                className={classNames(
                    "flex flex-col cursor-pointer text-gray-500 py-2",
                    { "border-b-2 border-teal-500 text-teal-500": selectedOption === option }
                )}
                key={option}
            >
                {option}
            </div>)}
        </div>
    )
}

export default Tabs