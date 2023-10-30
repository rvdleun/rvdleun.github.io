import { FC } from "react";
import Text, { TextContent } from "./Text"
import Field from "./Field";

interface FieldValueProps {
    field: TextContent;
    value: TextContent;
}

const FieldValue: FC<FieldValueProps> = ({ field, value }) =><p>
    <Field value={field} />: <Text value={value} />
</p>

export default FieldValue;