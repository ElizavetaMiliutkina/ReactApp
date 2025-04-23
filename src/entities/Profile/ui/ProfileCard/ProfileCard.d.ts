import { Profile } from "../../model/types/profile.ts";
import { Currency } from "@/entities/Currency";
export interface ProfileCardProps {
    className?: string;
    data?: Profile | null;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstName?: (value: string) => void;
    onChangeLastName?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
}
export declare const ProfileCard: (props: ProfileCardProps) => import("react/jsx-runtime").JSX.Element;
