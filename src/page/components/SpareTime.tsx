import Category from "../../components/Category";
import Field from "../../components/Field";
import Text from "../../components/Text";
import { Data } from "../../data"

export const SpareTime = () => {
    const { spareTime } = Data;

    return <Category title={{ en: "Spare time", nl: "Vrije tijd" }}>
        { spareTime.map(activity => <div key={activity.description.nl} className="mb-4">
            <p><Field value={activity.title} /></p>
            <p><Text value={activity.description} /></p>
        </div>)}
    </Category>
}