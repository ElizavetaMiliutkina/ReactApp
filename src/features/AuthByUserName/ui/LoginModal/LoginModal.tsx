import { classNames } from '@/helpers/classNames/classNames';
import cls from './LoginModal.module.scss'
import { UiModal } from "@/components/ui/Modal/UiModal.tsx";
import { LoginForm } from "../LoginForm/LoginForm.tsx";

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
                 className={classNames(cls.LoginModal, {}, [className])}
                 lazy
        >
            <LoginForm/>
        </UiModal>
    );
};
