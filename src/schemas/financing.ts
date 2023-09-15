import * as yup from "yup"

const financingSchema = yup.object({
    lender: yup.string().required().label('Lender'),
    loanAmount: yup.number().required().label('Load amount'),
    startDate: yup.date().required().label('Start date'),
    typeOfRate: yup.string().required().label('Type of rate'),
    interestRate: yup.number().required().label('Interest rate'),
    interestCapitalization: yup.string().required().label('Interest Capitalization'),
    interestOnlyPeriod: yup.string().required().label('Interest only period'),
    term: yup.string().required().label('Term'),
    amortization: yup.string().required().label('Amortization'),
    financingFees: yup.string().required().label('Financing fees'),
})

export default financingSchema