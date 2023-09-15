import { FormStage } from "@/enums/enums";

export interface IFormContext {
    [key: string]: string | number;
}

export interface IPropertyDetailsState {
    propertyName?: string;
    addressLine?: string;
    closeDate?: string;
    country?: string;
    zipCode?: string;
    city?: string;
}

export interface IFinancingState {
    term?: string;
    lender?: string;
    startDate?: string;
    loanAmount?: string;
    typeOfRate?: string;
    interestRate?: string;
    amortization?: string;
    financingFees?: string;
    interestOnlyPeriod?: string;
    interestCapitalization?: string;
}

export interface IFormState {
    stage: FormStage;
    setStage: React.Dispatch<React.SetStateAction<FormStage>>;
    propertyDetails: IPropertyDetailsState;
    setPropertyDetails: React.Dispatch<React.SetStateAction<IPropertyDetailsState>>;
    financing: IFinancingState;
    setFinancing: React.Dispatch<React.SetStateAction<IFinancingState>>;
}