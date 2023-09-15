"use client"

import { useFormContext } from "@/context/FormContext"
import financingSchema from "@/schemas/financing"
import Form from "@/shared/components/Form/Form"
import { FormStage } from "@/enums/enums"
import React from "react"
import Tabs from "@/shared/components/Tabs/Tabs"
import TextInput from "@/shared/components/TextInput/TextInput"
import { IoMdAdd } from "react-icons/io"

const Financing = () => {
    const { setStage } = useFormContext()

    const onSubmit = () => setStage(FormStage.FOUR)

    const handleBack = () => setStage(FormStage.TWO)

    return (
        <Form
            initialValues={{
                term: "",
                lender: "",
                startDate: "",
                loadAmount: "",
                typeOfRate: "",
                interestRate: "",
                amortization: "",
                financingFees: "",
                interestOnlyPeriod: "",
                interestCapitalization: "",
            }}
            validationSchema={financingSchema}
            onSubmit={onSubmit}
            wrapperClasses="flex flex-col w-full gap-8 h-full justify-between"
        >
            <div className="flex flex-col gap-8 w-full">
                <div className="text-2xl">Financing</div>
                <Tabs options={["Debt 1", "Add debt"]} />
                <div className="flex flex-row gap-2 w-7/12 items-end">
                    <TextInput fieldName="lender" label="Lender" />
                    <div className="flex cursor-pointer justify-center items-center border-2 border-gray-300 rounded-lg p-2 w-10 h-10">
                        <IoMdAdd />
                    </div>
                </div>
                <div className="flex flex-row gap-4 w-7/12">
                    <TextInput fieldName="loadAmount" label="Loan Amount" />
                    <TextInput fieldName="startDate" label="Start Date" />
                    <div className="opacity-0 flex cursor-pointer justify-center items-center rounded-lg p-2 w-10 h-10">
                        <IoMdAdd />
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-4 justify-end">
                <button onClick={handleBack} className="py-3 px-4 rounded-lg font-bold text-teal-900">Back</button>
                <button className="py-3 px-4 rounded-lg bg-teal-900 text-white">Continue</button>
            </div>
        </Form>
    )
}

export default Financing