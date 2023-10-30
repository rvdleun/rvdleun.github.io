import Category from "../../components/Category";
import Header from "../../components/Header";
import { Data } from "../../data"

export const PersonalProjects = () => {
    const { personalProjects } = Data;

    return <Category title={{ nl: "Persoonlijke projecten", en: "Personal projects" }}>
        { personalProjects.map(project => <div key={project.title} className="mb-8">
            <Header value={project.title} />
            <p className="italic mb-4">{ project.href }</p>
            { project.description.map(paragraph => <p className="mb-2">{ paragraph }</p>)}
        </div>)}
    </Category>

}