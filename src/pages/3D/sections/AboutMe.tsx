import { TextPlane } from "../components/TextPlane.tsx";
import { Data } from "../../../data.ts";
import {
  getParagraphsFromSelectedLanguage,
  getTextFromSelectedLanguage,
} from "../../../utils/selected-language.ts";

export const AboutMe = () => {
  const { aboutMe } = Data;

  return (
    <group>
      <group position={[-1.2, 1, 0]}>
        <TextPlane
          paragraphs={[
            {
              fontSize: "large",
              text: getTextFromSelectedLanguage({ nl: "Naam", en: "Name" }),
            },
            {
              fontSize: "medium",
              text: aboutMe.name,
            },
            {
              fontSize: "large",
              text: getTextFromSelectedLanguage({ nl: "Titel", en: "Title" }),
            },
            {
              fontSize: "medium",
              text: "Freelance Software Developer",
            },
            {
              fontSize: "medium",
              text: "",
            },
            {
              fontSize: "large",
              text: getTextFromSelectedLanguage({
                en: "Recently used skills & expertise:",
                nl: "Meest recente gebruikte vaardigheden en expertise:",
              }),
            },
            {
              fontSize: "medium",
              text: aboutMe.recentUsedSkillsAndExpertise.join(", "),
            },
          ]}
        />
      </group>
      <group position={[1.2, 1, 0]}>
        <TextPlane
          paragraphs={getParagraphsFromSelectedLanguage(
            aboutMe.description,
          ).map((text) => ({
            fontSize: "medium",
            text,
          }))}
        />
      </group>
    </group>
  );
};
