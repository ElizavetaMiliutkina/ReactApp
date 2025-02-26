import { classNames } from "@/helpers/classNames/classNames.ts";
import cls from './Navbar.module.scss'

export interface NavbarProps {
    className?: string
}

export const Navbar = ({ className = '', }: NavbarProps) => {
    return(
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>

            </div>
        </div>
    )
}
