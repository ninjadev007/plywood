import { FormikConfig, FormikValues } from "formik"
import React from "react"

export interface IFormProps extends FormikConfig<FormikValues> {
    wrapperClasses?: string;
}

export interface ITextInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    fieldName: string;
    label?: string;
    wrapperClassName?: string;
    labelClassName?: string;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element
    leftIconClass?: string;
    rightIconClass?: string;
}

export interface IFormButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
}

export interface ITabsProps {
    options?: string[]
}

export interface IBinarySelectProps {
    options?: string[];
    fieldName: string;
    label?: string;
}