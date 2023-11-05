import type { Meta, StoryObj } from "@storybook/react";
import { ReactThreeWrapper } from "../../../../.storybook/ReactThreeWrapper.tsx";
import { TextPlane } from "./TextPlane.tsx";
import { Data } from "../../../data.ts";

const meta = {
  title: "3D/components/TextPlane",
  component: TextPlane,
} satisfies Meta<typeof TextPlane>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (props) => (
    <ReactThreeWrapper>
      <TextPlane {...props} />
    </ReactThreeWrapper>
  ),
  args: {
    paragraphs: Data.aboutMe.description.en.map((text) => ({
      fontSize: "medium",
      text,
    })),
  },
};
