import { ReactNode } from "react";
export interface UiModalProps {
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean;
}
export declare const UiModal: (props: UiModalProps) => import("react/jsx-runtime").JSX.Element | null;
