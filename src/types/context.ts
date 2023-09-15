import { FormStage } from "@/enums/enums";

export interface IFormContext {
    [key: string]: string | number;
}

export interface IFormState {
    stage: FormStage;
    setStage: React.Dispatch<React.SetStateAction<FormStage>>;
}