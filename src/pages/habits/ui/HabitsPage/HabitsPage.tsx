// import { classNames } from 'shared/lib/classnames/classNames';
import { classNames } from "../../../../shared/lib/classnames/classNames";
import { CreateHabitForm } from 'widgets';
import cls from './HabitsPage.module.scss';

interface HabitsPageProps {
    className?: string;
}

export const HabitsPage = (props: HabitsPageProps) => {
    const { className } = props;
    
    return (
        <div className={classNames(cls.HabitsPage, {}, [className])}>
           <h1 className='p-3'>Habits page</h1>
           <CreateHabitForm />
        </div>
    );
};
