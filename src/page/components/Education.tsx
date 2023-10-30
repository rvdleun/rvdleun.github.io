import Category from "../../components/Category";
import Header from "../../components/Header";
import { Data } from "../../data";

const Education = () => {
    const { education } = Data;

    return <Category title={{ nl: "Opleidingen", en: "Education" }}>
        { education.map(school => <div key={school.title} className="mb-8">
            <Header value={school.title!} />
            <p className="mt-1 mb-2">{ school.subTitle } ({ school.dateRange.start } - {school.dateRange.end})</p>
        </div>)}
    </Category>
}

export default Education;