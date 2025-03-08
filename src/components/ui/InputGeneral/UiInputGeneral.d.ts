import React, { InputHTMLAttributes } from "react";
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;
export interface InputProps extends HTMLInputProps {
    className?: string;
    type?: string;
    value?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
}
export declare const UiInput: React.MemoExoticComponent<(props: InputProps) => import("react/jsx-runtime").JSX.Element>;
export {};
