import dayjs from 'dayjs';
import React, { useContext } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import '../../styles/calendar/_calendar.scss';
import { GrNext, GrPrevious } from 'react-icons/gr';

const CalendarHeader = () => {
    const { monthIndex, setMonthIndex } = useContext(GlobalContext);

    const handlePrevMonth = () => {
        setMonthIndex(monthIndex - 1);
    };
    const handleNextMonth = () => {
        setMonthIndex(monthIndex + 1);
    };
    const handleReset = () => {
        setMonthIndex(
            monthIndex === dayjs().month()
                ? monthIndex + Math.random()
                : dayjs().month()
        );
    };
    return (
        <header className="header">
            <h1 className="header__h1">Mothercode</h1>
            <button
                onClick={handleReset}
                className="header__button--today rotate-center"
            >
                Today
            </button>
            <button onClick={handlePrevMonth}>
                <span className="header__button--previous">
                    <GrPrevious />
                </span>
            </button>
            <button onClick={handleNextMonth}>
                <span className="header__button--next">
                    <GrNext />
                </span>
            </button>
            <h2 className="header__h2">
                {dayjs(new Date(dayjs().year(), monthIndex)).format(
                    'MMMM YYYY'
                )}
            </h2>
        </header>
    );
};

export default CalendarHeader;
