import { TextPlane } from "../components/TextPlane.tsx";
import { Data } from "../../../data.ts";
import {
  getParagraphsFromSelectedLanguage,
  getTextFromSelectedLanguage,
} from "../../../utils/selected-language.ts";
import { Vector3 } from "three";

const positions = [
  new Vector3(-1.2, 1, 0),
  new Vector3(1.2, 1, 0),
  new Vector3(-2.2, 1, 1.5),
  new Vector3(2.2, 1, 1.5),
  new Vector3(-1.2, 1, 3),
  new Vector3(1.2, 1, 3),
];
export const Experiences = () => {
  const { experiences } = Data;

  return (
    <group>
      {experiences.slice(0, positions.length).map((experience, index) => (
        <group position={positions[index]}>
          <TextPlane
            key={index}
            paragraphs={[
              {
                fontSize: "large",
                text: experience.organisationTitle,
              },
              {
                fontSize: "medium",
                text: getTextFromSelectedLanguage(experience.workTitle),
              },
              {
                fontSize: "medium",
                text: `Used skills and expertise: ${experience.usedSkillsAndExpertise.join(
                  ", ",
                )}`,
              },
              {
                fontSize: "medium",
                text: "",
              },
              ...getParagraphsFromSelectedLanguage(experience.description).map(
                (text) => ({
                  text,
                }),
              ),
            ]}
          />
        </group>
      ))}
    </group>
  );
};
