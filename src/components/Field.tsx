import { FC } from "react";
import Text, { TextContent } from "./Text"

interface FieldProps {
    value: TextContent;
}

const Field: FC<FieldProps> = ({ value }) => <strong><Text value={value} /></strong>

export default Field