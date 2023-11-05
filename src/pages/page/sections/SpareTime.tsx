import Category from "../components/Category.tsx";
import Field from "../components/Field.tsx";
import Text from "../components/Text.tsx";
import { Data } from "../../../data.ts"

export const SpareTime = () => {
    const { spareTime } = Data;

    return <Category title={{ en: "Spare time", nl: "Vrije tijd" }}>
        { spareTime.map(activity => <div key={activity.description.nl} className="mb-4">
            <p><Field value={activity.title} /></p>
            <p><Text value={activity.description} /></p>
        </div>)}
    </Category>
}
