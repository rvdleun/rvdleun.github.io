import { FC, PropsWithChildren } from "react";
import Text, { TextContent } from "./Text";

interface CategoryProps extends PropsWithChildren {
    title: TextContent;
}

const Category: FC<CategoryProps> = ({ children, title }) => <div className="flex justify-around">
    <div className="min-w-[20%] border-r-2 border-r-black px-4 pt-2 pb-10"><Text value={title} /></div>
    <div className="w-full px-4  pt-2 pb-10">{children}</div>
</div>

export default Category;