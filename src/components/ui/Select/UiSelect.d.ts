export interface SelectOption {
    value: string;
    content: string;
}
export interface UiSelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    readonly?: boolean;
    onChange?: (value: string) => void;
}
export declare const UiSelect: import("react").MemoExoticComponent<(props: UiSelectProps) => import("react/jsx-runtime").JSX.Element>;
