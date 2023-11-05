import Category from "../components/Category.tsx";
import FieldValue from "../components/FieldValue.tsx";
import { Data } from "../../../data.ts";
import portrait from "../assets/portrait.png";
import Paragraphs from "../components/Paragraphs.tsx";


const AboutMe = () => {
    const { aboutMe } = Data;

    return <div style={{ pageBreakAfter: "always" }}>
        <Category title={{ nl: "Persoonlijke gegevens", en: "About me" }}>
            <div className="flex justify-between">
                <div>
                    <div className="mb-2">
                        <FieldValue field={{ nl: "Naam", en: "Name"}} value={aboutMe.name} />
                        {/* <FieldValue field={{ nl: "Telefoonnummer", en: "Mobile number"}} value={aboutMe.phoneNumber} /> */}
                        <FieldValue field="E-mail" value={aboutMe.email} />
                    </div>
                    <div className="mb-2">
                        <FieldValue field="Github" value={aboutMe.socials.GitHub} />
                        <FieldValue field="LinkedIn" value={aboutMe.socials.LinkedIn} />
                        <FieldValue field="Mastadon" value={aboutMe.socials.Mastadon} />
                    </div>
                    <div className="mb-2">
                        <FieldValue field={{ nl: "Geboortedatum", en: "Birthdate"}} value={aboutMe.birthDate} />
                        <FieldValue field={{ nl: "Geboorteplaats", en: "Birthplace"}} value={aboutMe.birthPlace} />
                        <FieldValue field={{ nl: "Nationaliteit", en: "Nationality"}} value={aboutMe.nationality} />
                    </div>
                    <div className="mb-2">
                        <FieldValue field={{ nl: "Burgerlijke staat", en: "Martial status"}} value={aboutMe.maritalStatus} />
                    </div>
                </div>
                <div>
                    <img className="w-40" src={portrait} />
                </div>
            </div>
            <div>
                <div className="mb-2">
                    <FieldValue field={{ en: "Recently used skills & expertise:", nl: "Meest recente gebruikte vaardigheden en expertise:" }} value={aboutMe.recentUsedSkillsAndExpertise.join(", ")} />
                </div>
                <Paragraphs value={aboutMe.description} />
            </div>
        </Category>
    </div>
}

export default AboutMe;
