import { classNames } from '@/helpers/classNames/classNames';
import cls from './UiSelect.module.scss'
import { ChangeEvent, memo, useMemo } from 'react'

export interface SelectOption {
    value: string
    content: string
}

export interface UiSelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

export const UiSelect = memo((props: UiSelectProps) => {
    const {
        className = '',
        label,
        options,
        value,
        readonly,
        onChange
    } = props;

    const optionList = useMemo(() => options?.map ((opt) => (
        <option
            className={cls.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options])

    const onChangeHandler = (e : ChangeEvent<HTMLSelectElement> )=>{
        if(onChange){
            onChange(e.target.value)
        }
    }

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && (
                <span className={cls.label}>{`${label} >`}</span>
            )}
            <select
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    );
});
