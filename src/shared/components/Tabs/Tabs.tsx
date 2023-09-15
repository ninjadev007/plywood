"use client"

import { ITabsProps } from "@/types/components"
import React, { useState } from "react"
import classNames from "classnames"

const Tabs: React.FC<ITabsProps> = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState(options?.[0] || "")

    const handleSelect = (opt: string) => setSelectedOption(opt)

    return (
        <div className="w-full flex flex-row gap-8 border-b-[1px] border-gray-300">
            {options?.map(option => <div 
                onClick={() => handleSelect(option)}
                className={classNames(
                    "flex flex-col cursor-pointer  py-2 font-bold",
                    { "border-b-2 border-teal-500 text-teal-900": selectedOption === option },
                    { "text-gray-300": selectedOption !== option }
                )}
                key={option}
            >
                {option}
            </div>)}
        </div>
    )
}

export default Tabs