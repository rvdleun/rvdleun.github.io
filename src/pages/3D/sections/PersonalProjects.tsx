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
];
export const PersonalProjects = () => {
  const { personalProjects } = Data;

  return (
    <group>
      {personalProjects
        .slice(0, positions.length)
        .map((personalProject, index) => (
          <group position={positions[index]}>
            <TextPlane
              key={index}
              paragraphs={[
                {
                  fontSize: "large",
                  text: getTextFromSelectedLanguage(personalProject.title),
                },
                {
                  fontSize: "medium",
                  text: getTextFromSelectedLanguage(personalProject.href),
                },
                ...getParagraphsFromSelectedLanguage(
                  personalProject.description,
                ).map((text) => ({
                  text,
                })),
              ]}
            />
          </group>
        ))}
    </group>
  );
};
