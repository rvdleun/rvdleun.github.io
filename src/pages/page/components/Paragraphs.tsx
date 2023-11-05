import { FC } from "react";
import { getSelectedLanguage } from "../../../utils/selected-language.ts";

export type ParagraphsContent = { en: string[]; nl: string[] } | string[];

interface ParagraphsContentProps {
  value: ParagraphsContent;
}

const Paragraphs: FC<ParagraphsContentProps> = ({ value }) => {
  const paragraphs = (
    Array.isArray(value) ? value : value[getSelectedLanguage()]
  ) as string[];
  return paragraphs.map((line) => (
    <p key={line} className="mb-2">
      {line}
    </p>
  ));
};

export default Paragraphs;
