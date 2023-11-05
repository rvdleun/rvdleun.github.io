import { FC } from "react";

export const Avatar: FC = () => {
  return (
    <mesh>
      <sphereBufferGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};
