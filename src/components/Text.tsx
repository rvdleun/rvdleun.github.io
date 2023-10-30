import { FC } from "react"

export type TextContent = { en: string, nl: string } | string;

interface TextProps {
    value: TextContent
}

const Text: FC<TextProps> = ({ value }) => typeof value === 'string' ? value : value.en;

export default Text;