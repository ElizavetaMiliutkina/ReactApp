import { Currency } from '../../model/types/currency';
export interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}
export declare const CurrencySelect: import("react").MemoExoticComponent<({ className, value, onChange, readonly, }: CurrencySelectProps) => import("react/jsx-runtime").JSX.Element>;
