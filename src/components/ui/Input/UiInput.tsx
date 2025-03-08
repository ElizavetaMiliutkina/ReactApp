import { classNames } from '@/helpers/classNames/classNames';
import cls from './UiInput.module.scss'
import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export interface UiInputProps extends HTMLInputProps{
    className?: string;
    type?:string;
    value?:string;
    placeholder?:string;
    onChange?:(value: string) => void
    autofocus?: boolean
}

export const UiInput = memo((props: UiInputProps) => {
    const {
        className = '',
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        ...otherProps
    } = props;
    const [isFocus, setIsFocus] = useState(false)
    const [caretPosition, setCaretPosition] = useState(0)

    const ref = useRef<HTMLInputElement>(null)

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    }


    const onBlur = () => {
        setIsFocus(false)
    }

    const onFocus = () => {
        setIsFocus(true)
        ref.current?.focus()
    }

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart);
    }

    useEffect(() => {
        if(autofocus){
            setIsFocus(true)
        }
    }, [autofocus]);

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input ref={ref}
                       type={type}
                       value={value}
                       className={cls.input}
                       onChange={onChangeHandler}
                       onBlur={onBlur}
                       onFocus={onFocus}
                       onSelect={onSelect}
                       {...otherProps}
                />
                {isFocus && (
                    <span className={cls.caret}
                          style={{ left: `${caretPosition * 9}px` }}
                    />
                )}
            </div>

        </div>
    );
});
