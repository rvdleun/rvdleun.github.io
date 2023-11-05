import { FC, PropsWithChildren } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const ReactThreeWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        {children}
      </Canvas>
    </div>
  );
};
