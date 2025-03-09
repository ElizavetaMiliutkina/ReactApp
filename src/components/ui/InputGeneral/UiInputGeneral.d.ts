import React, { InputHTMLAttributes } from "react";
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;
export interface UiInputGeneralProps extends HTMLInputProps {
    className?: string;
    type?: string;
    value?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
}
export declare const UiInputGeneral: React.MemoExoticComponent<(props: UiInputGeneralProps) => import("react/jsx-runtime").JSX.Element>;
export {};
