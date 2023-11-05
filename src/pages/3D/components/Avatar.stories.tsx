import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar.tsx";
import { ReactThreeWrapper } from "../../../../.storybook/ReactThreeWrapper.tsx";

const meta = {
  title: "3D/components/Avatar",
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <ReactThreeWrapper>
      <group position={[0, -1, 0]}>
        <Avatar />
      </group>
    </ReactThreeWrapper>
  ),
};
