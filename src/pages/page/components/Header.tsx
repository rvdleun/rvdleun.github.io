import { FC } from "react";
import Text, { TextContent } from "./Text.tsx";
import DateRange from "./DateRange.tsx";

interface HeaderProps {
    value: TextContent;
    dateRange?: { end: string, start: string }
}

const Header: FC<HeaderProps> = ({ dateRange, value }) => <div className="flex px-2 justify-between bg-dark text-white">
    <p><Text value={value} /></p>
    { dateRange && <div className="max-sm:hidden"><DateRange {...dateRange} /></div>}
</div>;

export default Header;
