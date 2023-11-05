import { FC } from "react";
import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./components/Avatar.tsx";
import { Canvas } from "@react-three/fiber";
import { ARButton, useXR, XR } from "@react-three/xr";
import { AboutMe } from "./sections/AboutMe.tsx";

const SceneContent: FC = () => {
  const { isPresenting } = useXR();

  return (
    <group position={[0, 0, isPresenting ? -1.5 : 0]}>
      <ambientLight />
      <OrbitControls />
      <Avatar />
      <AboutMe />
    </group>
  );
};

export const Scene: FC = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ARButton />
      <Canvas>
        <XR>
          <SceneContent />
        </XR>
      </Canvas>
    </div>
  );
};
