import { classNames } from '@/helpers/classNames/classNames';
import cls from './UiInput.module.scss'
import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

export enum  InputTypes {
    TEXT= 'text',
    NUMBER = 'number',
}

export interface UiInputProps extends HTMLInputProps{
    className?: string;
    type?:InputTypes;
    value?:string | number;
    placeholder?:string;
    onChange?:(value: string) => void
    autofocus?: boolean
    readonly?: boolean
}

export const UiInput = memo((props: UiInputProps) => {
    const {
        className = '',
        value,
        onChange,
        type = InputTypes.TEXT,
        placeholder,
        autofocus,
        readonly,
        ...otherProps
    } = props;
    const [isFocus, setIsFocus] = useState(false)
    const [caretPosition, setCaretPosition] = useState(0)

    const isCaretVisible = isFocus && !readonly

    const ref = useRef<HTMLInputElement>(null)

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        if (type === 'number' && !/^\d*$/.test(newValue)) {
            return;
        }
        onChange?.(newValue);
        setCaretPosition(newValue.length);
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

    const mods = {
        [cls.readonly]: !!readonly
    }

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
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
                       readOnly={readonly}
                       {...otherProps}
                />
                {isCaretVisible && (
                    <span className={cls.caret}
                          style={{ left: `${caretPosition * 9}px` }}
                    />
                )}
            </div>

        </div>
    );
});
