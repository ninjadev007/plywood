import * as yup from "yup"

const propertyDetailsSchema = yup.object({
    propertyName: yup.string().required().label('Property Name'),
    addressLine: yup.string().required().label('Address Line'),
    closeDate: yup.date().required().label('Close Date'),
    country: yup.string().required().label('Country'),
    city: yup.string().required().label('City'),
    zipCode: yup.string().required().label('Zip/Postal Code'),
})

export default propertyDetailsSchema