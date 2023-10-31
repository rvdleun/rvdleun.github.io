import Category from "../../components/Category";
import Header from "../../components/Header";
import Paragraphs from "../../components/Paragraphs";
import { Data } from "../../data"

export const PersonalProjects = () => {
    const { personalProjects } = Data;

    return <Category title={{ nl: "Persoonlijke projecten", en: "Personal projects" }}>
        { personalProjects.map((project) => <div key={project.description.nl[0]} className="mb-8">
            <Header value={project.title} />
            <p className="italic mb-4">{ project.href }</p>
            <Paragraphs value={project.description} />
        </div>)}
    </Category>

}