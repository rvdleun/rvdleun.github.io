import { FC } from "react";
import { AnimationModel as RpmAvatar } from "@readyplayerme/visage";

// @ts-ignore
import AvatarSrc from "../assets/Avatar.glb";
// @ts-ignore
import IdleAnimation from "../assets/animations/Idle.glb";

export const Avatar: FC = () => {
  console.log(AvatarSrc);

  return <RpmAvatar animationSrc={IdleAnimation} modelSrc={AvatarSrc} />;
};
