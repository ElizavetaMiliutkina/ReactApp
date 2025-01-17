import { classNames } from "@/helpers/classNames/classNames.ts";
import cls from './ThemeSwitcher.module.scss'
import { useTheme } from "@/shared/theme/useTheme.ts";
import { ReactComponent as IconDark } from "@/assets/theme-dark.svg";
import { ReactComponent as IconLight } from "@/assets/theme-light.svg";
import { Theme } from "@/shared/theme/ThemeContext.ts";
import { themeButton, UiButton } from "@/components/ui/UiButton/UiButton.tsx";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {
        className = '',
    } = props;

    const { theme, toggleTheme } = useTheme()

    return (
        <UiButton
            theme={themeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
        >
            {theme === Theme.DARK? <IconDark/> : <IconLight/>}
        </UiButton>
    );
};
