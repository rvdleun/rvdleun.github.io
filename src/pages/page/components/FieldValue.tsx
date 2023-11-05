import { FC } from "react";
import Text, { TextContent } from "./Text.tsx";
import Field from "./Field.tsx";

interface FieldValueProps {
  field: TextContent;
  value: TextContent;
}

const FieldValue: FC<FieldValueProps> = ({ field, value }) => (
  <p>
    <Field value={field} />: <Text value={value} />
  </p>
);

export default FieldValue;
