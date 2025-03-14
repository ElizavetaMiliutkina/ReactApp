import { classNames } from '@/helpers/classNames/classNames';
import { UiModal } from "@/components/ui/Modal/UiModal.tsx";
import { Suspense } from "react";
import { UiLoader } from "@/components";
import { LoginFormAsync } from "../LoginForm/LoginForm.async.ts";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const {
        className = '',
        isOpen,
        onClose
    } = props;

    return (
        <UiModal isOpen={isOpen}
                 onClose={onClose}
                 className={classNames('', {}, [className])}
                 lazy
        >
            <Suspense fallback={<UiLoader/>}>
                <LoginFormAsync/>
            </Suspense>
        </UiModal>
    );
};
