"use client"

import TextInput from "@/shared/components/TextInput/TextInput"
import propertyDetailsSchema from "@/schemas/propertyDetails"
import { useFormContext } from "@/context/FormContext"
import Form from "@/shared/components/Form/Form"
import { FormStage } from "@/enums/enums"
import React from "react"

const PropertyDetails = () => {
    const { setStage } = useFormContext()

    const onSubmit = () => {
        setStage(FormStage.TWO)
    }

    return (
        <Form
            initialValues={{
                propertyName: "",
                addressLine: "",
                closeDate: "",
                country: "",
                city: "",
                zipCode: ""
            }}
            validationSchema={propertyDetailsSchema}
            onSubmit={onSubmit}
            wrapperClasses="flex flex-col w-full gap-8 h-full justify-between"
        >
            <div className="flex flex-col w-full gap-8">
                <div className="text-xl">Property Details</div>
                <div className="text-md">Property Details</div>
                <TextInput fieldName="propertyName" label="Property name" />
                <TextInput fieldName="addressLine" label="Address line" />
                <div className="flex flex-row gap-4">
                    <TextInput fieldName="country" label="Country" />
                    <TextInput fieldName="city" label="City" />
                    <TextInput fieldName="zipCode" label="ZIP/Postal Code" />
                </div>
                <TextInput fieldName="closeDate" label="Close date" type="date" />
            </div>
            <div className="flex flex-row justify-end">
                <button className="py-3 px-4 rounded-lg bg-teal-900 text-white">Continue</button>
            </div>
        </Form>
    )
}

export default PropertyDetails