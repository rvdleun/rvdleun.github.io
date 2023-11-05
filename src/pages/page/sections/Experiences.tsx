import Category from "../components/Category.tsx";
import FieldValue from "../components/FieldValue.tsx";
import Header from "../components/Header.tsx";
import Paragraphs from "../components/Paragraphs.tsx";
import Text from "../components/Text.tsx";
import { Data } from "../../../data.ts";

const Experiences = () => {
  const { experiences, moreExperience } = Data;

  return (
    <Category title={{ nl: "Werkervaring", en: "Experience" }}>
      {experiences.map((experience) => (
        <div
          key={`${experience.organisationTitle}${experience.dateRange.start}`}
          className="mb-8"
        >
          <Header
            value={experience.organisationTitle!}
            dateRange={experience.dateRange}
          />
          <div className="mb-2">
            <FieldValue
              field={{ en: "Title", nl: "Functietitel" }}
              value={experience.workTitle}
            />
          </div>
          <div className="mb-2">
            <FieldValue
              field={{
                en: "Used skills & expertise:",
                nl: "Gebruikte vaardigheden en expertise:",
              }}
              value={experience.usedSkillsAndExpertise.join(", ")}
            />
          </div>
          <Paragraphs value={experience.description} />
        </div>
      ))}
      <p className="mt-12 mb-2 italic">
        <Text value={moreExperience} />
      </p>
    </Category>
  );
};

export default Experiences;
