import { classNames } from '@/helpers/classNames/classNames';
import cls from './UiInputGeneral.module.scss'
import React, { InputHTMLAttributes, memo, useRef } from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export interface UiInputGeneralProps extends HTMLInputProps{
    className?: string;
    type?:string;
    value?:string;
    placeholder?:string;
    onChange?:(value: string) => void
}

export const UiInputGeneral = memo((props: UiInputGeneralProps) => {
    const {
        className = '',
        value,
        onChange,
        type = 'text',
        placeholder,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null)

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }


    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <input ref={ref}
                   type={type}
                   value={value}
                   className={cls.input}
                   onChange={onChangeHandler}
                   {...otherProps}
            />

        </div>
    );
});
