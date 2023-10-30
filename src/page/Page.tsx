import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import { PersonalProjects } from "./components/PersonalProjects";
import { SpareTime } from "./components/SpareTime";

const Page = () => <>
    <h1 className="text-xl text-center tracking-wide uppercase">Curriculum vitae</h1>
    <AboutMe />
    <Experiences />
    <Education />
    <PersonalProjects />
    <SpareTime />
</>

export default Page;