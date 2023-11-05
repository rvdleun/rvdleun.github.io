import AboutMe from "./sections/AboutMe.tsx";
import Education from "./sections/Education.tsx";
import Experiences from "./sections/Experiences.tsx";
import { PersonalProjects } from "./sections/PersonalProjects.tsx";
import { SpareTime } from "./sections/SpareTime.tsx";

const Page = () => (
  <>
    <h1 className="text-xl text-center tracking-wide uppercase">
      Curriculum vitae
    </h1>
    <AboutMe />
    <Experiences />
    <Education />
    <PersonalProjects />
    <SpareTime />
  </>
);

export default Page;
