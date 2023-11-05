export const getSelectedLanguage = () => {
  return window.location.search === "?nl" ? "nl" : "en";
};

export const getParagraphsFromSelectedLanguage = (paragraphs: {
  en: string[];
  nl: string[];
}) => {
  const selectedLanguage = getSelectedLanguage();
  return paragraphs[selectedLanguage];
};

export const getTextFromSelectedLanguage = (text: {
  en: string;
  nl: string;
}) => {
  const selectedLanguage = getSelectedLanguage();
  return text[selectedLanguage];
};
