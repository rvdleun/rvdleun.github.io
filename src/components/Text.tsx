import { FC } from "react"
import { getSelectedLanguage } from "../utils/selected-language";

export type TextContent = { en: string, nl: string } | string;

interface TextProps {
    value: TextContent
}

const Text: FC<TextProps> = ({ value }) => typeof value === 'string' ? value : value[getSelectedLanguage()];

export default Text;