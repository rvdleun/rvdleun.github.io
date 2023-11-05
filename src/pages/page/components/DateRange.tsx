import { FC } from "react";

function parseDate(dateText: string) {
    const date = new Date(dateText);
    return `${ date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;
}

interface DateRangeProps {
    end: string;
    start: string;
}

const DateRange: FC<DateRangeProps> = ({ end, start }) => {
    return <p>{parseDate(start)} - {parseDate(end)}</p>
}

export default DateRange;