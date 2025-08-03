import { classNames } from '@/helpers/classNames/classNames';
import cls from './UiCode.module.scss'
import { useCallback } from "react";
import { ReactComponent as IconCode } from '@/assets/code.svg';
import { themeButton, UiButton } from "@/components/ui/Button/UiButton";

export interface UiCodeProps {
    className?: string;
    text: string;
}

export const UiCode = (props: UiCodeProps) => {
    const {
        className = '',
        text
    } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text)
    }, [text])

    return (
        <pre className={classNames(cls.UiCode, {}, [className])}>
            <UiButton onClick={onCopy} className={cls.copyBtn} theme={themeButton.CLEAR}>
                <IconCode/>
            </UiButton>
            <code>
                {text}
            </code>
        </pre>
    );
};
