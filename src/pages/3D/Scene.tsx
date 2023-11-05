import { FC } from "react";
import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./components/Avatar.tsx";
import { Canvas } from "@react-three/fiber";
import { ARButton, useXR, XR } from "@react-three/xr";
import { AboutMe } from "./sections/AboutMe.tsx";
import { Experiences } from "./sections/Experiences.tsx";
import { PersonalProjects } from "./sections/PersonalProjects.tsx";

const SceneContent: FC = () => {
  const { isPresenting } = useXR();

  return (
    <group position={[0, isPresenting ? 0 : -1.2, -1.5]}>
      <ambientLight />
      <OrbitControls minDistance={0.1} maxDistance={0.1} />
      <Avatar />
      <PersonalProjects />
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
