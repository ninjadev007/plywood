"use client"

import BinarySelect from "@/shared/components/BinarySelect/BinarySelect"
import TextInput from "@/shared/components/TextInput/TextInput"
import { useFormContext } from "@/context/FormContext"
import financingSchema from "@/schemas/financing"
import { BsCurrencyDollar } from "react-icons/bs"
import { IFinancingState } from "@/types/context"
import Form from "@/shared/components/Form/Form"
import Tabs from "@/shared/components/Tabs/Tabs"
import { PiPercentBold } from "react-icons/pi"
import { FormStage } from "@/enums/enums"
import { IoMdAdd } from "react-icons/io"
import React from "react"

const Financing = () => {
    const { financing, setFinancing, setStage } = useFormContext()

    const onSubmit = (values: IFinancingState) => {
        console.log(values)
        setFinancing(values)
        setStage(FormStage.FOUR)
    }

    const handleBack = () => setStage(FormStage.TWO)

    return (
        <Form
            initialValues={{
                term: financing?.term || "",
                lender: financing?.lender || "",
                startDate: financing?.startDate || "",
                loanAmount: financing?.loanAmount || "",
                typeOfRate: financing?.typeOfRate || "",
                interestRate: financing?.interestRate || "",
                amortization: financing?.amortization || "",
                financingFees: financing?.financingFees || "",
                interestOnlyPeriod: financing?.interestOnlyPeriod || "",
                interestCapitalization: financing?.interestCapitalization || "",
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
                    <TextInput leftIcon={<BsCurrencyDollar />} fieldName="loanAmount" label="Loan Amount" />
                    <TextInput fieldName="startDate" label="Start Date" />
                    <div className="opacity-0 flex cursor-pointer justify-center items-center rounded-lg p-2 w-10 h-10">
                        <IoMdAdd />
                    </div>
                </div>
                <div className="flex flex-row gap-4 w-4/12">
                    <BinarySelect label="Type of Rate" options={["Fixed", "Variable"]} fieldName="typeOfRate" />
                </div>
                <div className="flex flex-row gap-4 w-4/12">
                    <TextInput fieldName="interestRate" label="Interest Rate" rightIcon={<PiPercentBold />} />
                </div>
                <div className="flex flex-row gap-2 w-full">
                    <BinarySelect label="Interest Capitalization" options={["Monthly", "Semi-Annual"]} fieldName="interestCapitalization" />
                    <TextInput fieldName="interestOnlyPeriod" label="Interest Only Period" rightIcon={<>months</>} />
                </div>
                <div className="flex flex-row gap-2 w-full">
                    <TextInput fieldName="term" label="Term" />
                    <TextInput fieldName="amortization" label="Amortization" />
                    <TextInput leftIcon={<BsCurrencyDollar />} fieldName="financingFees" label="Financing Fees" />
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