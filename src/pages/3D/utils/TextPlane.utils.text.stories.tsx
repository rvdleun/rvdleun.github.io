import type { Meta, StoryObj } from "@storybook/react";
import { FC } from "react";
import { generateTextPlane, TextPlaneSettings } from "./TextPlane.utils.ts";
import { Data } from "../../../data.ts";

const ImageStory: FC<{ paragraphs: TextPlaneSettings[] }> = ({
  paragraphs,
}) => {
  const { src } = generateTextPlane(paragraphs, "black")!;

  return <img alt="Generated text" src={src} />;
};

const meta = {
  title: "3D/utils/TextPlane/generateTextPlane",
  component: ImageStory,
  render: (props) => <ImageStory {...props} />,
} satisfies Meta<typeof ImageStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    paragraphs: [
      {
        fontSize: "large",
        text: "Title",
      },
      {
        fontSize: "medium",
        text: "Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! Hello, World!??",
      },
      {
        fontSize: "medium",
        text: "Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! Hello, World!??",
      },
    ],
  },
};

export const AboutMe: Story = {
  args: {
    paragraphs: Data.aboutMe.description.en.map((text) => ({
      fontSize: "medium",
      text,
    })),
  },
};
