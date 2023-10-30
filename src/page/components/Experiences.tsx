import Category from "../../components/Category";
import FieldValue from "../../components/FieldValue";
import Header from "../../components/Header";
import Text from "../../components/Text";
import { Data } from "../../data";

const Experiences = () => {
    const { experiences, moreExperience } = Data;

    return <Category title={{ nl: "Werkervaring", en: "Experience" }}>
        { experiences.map(experience => <div key={`${experience.organisationTitle}${experience.dateRange.start}`} className="mb-8">
            <Header value={experience.organisationTitle!} dateRange={experience.dateRange} />
            <p className="mb-2"><FieldValue field={{ en: "Title", nl: "Functietitel" }} value={experience.workTitle} /></p>
            <p className="mb-2"><FieldValue field={{ en: "Used skills & expertise:", nl: "Gebruikte vaardigheden en expertise:" }} value={experience.usedSkillsAndExpertise.join(", ")} /></p>
            { experience.description.map(paragraph => <p className="mb-2">{ paragraph }</p>)}
        </div>)}
        <p className="mt-12 mb-2 italic"><Text value={moreExperience} /></p>
    </Category>
}

export default Experiences;