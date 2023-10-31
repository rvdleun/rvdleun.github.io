import { FC, PropsWithChildren } from "react";
import Text, { TextContent } from "./Text";

interface CategoryProps extends PropsWithChildren {
    title: TextContent;
}

const Category: FC<CategoryProps> = ({ children, title }) => <div className="flex max-md:flex-col justify-around">
    <div className="min-w-[20%] border-r-2 border-r-dark px-4 pt-2 pb-10 max-md:border-none max-md:text-2xl max-md:text-center max-md:pb-2">
        <hr  className="border-dark pb-5 hidden max-md:block" />
        <Text value={title} />
    </div>
    <div className="w-full px-4  pt-2 pb-10">{children}</div>
</div>

export default Category;