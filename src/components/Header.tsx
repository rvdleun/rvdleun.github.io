import { FC } from "react";
import Text, { TextContent } from "./Text";
import DateRange from "./DateRange";

interface HeaderProps {
    value: TextContent;
    dateRange?: { end: string, start: string }
}

const Header: FC<HeaderProps> = ({ dateRange, value }) => <div className="flex px-2 justify-between bg-black text-white">
    <p><Text value={value} /></p>
    { dateRange && <DateRange {...dateRange} />}
</div>;

export default Header;