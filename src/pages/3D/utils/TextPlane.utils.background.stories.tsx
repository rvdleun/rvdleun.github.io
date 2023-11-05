import { FC } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { generateBackgroundPlane } from "./TextPlane.utils.ts";

const BackgroundStory: FC<{ height: number; width: number }> = ({
  width,
  height,
}) => {
  const src = generateBackgroundPlane(width, height)!;

  return <img alt="Generated text" src={src} />;
};

const meta = {
  title: "3D/utils/TextPlane/generateBackgroundPlane",
  component: BackgroundStory,
  render: (props) => <BackgroundStory {...props} />,
} satisfies Meta<typeof BackgroundStory>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    width: 640,
    height: 480,
  },
};
