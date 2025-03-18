import { classNames } from '@/helpers/classNames/classNames';
import cls from './Profile.module.scss'

interface ProfileProps {
    className?: string;
}

export const Profile = (props: ProfileProps) => {
    const {
        className = '',
    } = props;




    return (
        <div className={classNames(cls.Profile, {}, [className])} />
    );
};
