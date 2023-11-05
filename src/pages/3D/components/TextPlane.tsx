import { FC, useEffect, useRef, useState } from "react";
import {
  generateBackgroundPlane,
  generateTextPlane,
  TextPlaneSettings,
} from "../utils/TextPlane.utils.ts";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Group, Texture } from "three";
import { useXR } from "@react-three/xr";
import { useFrame, useThree } from "@react-three/fiber";

export const TextPlane: FC<{ paragraphs: TextPlaneSettings[] }> = ({
  paragraphs,
}) => {
  const containerRef = useRef<Group>(new Group());

  const [backgroundMap, setBackgroundMap] = useState<Texture>(null);
  const [widthHeight, setWidthHeight] = useState<[number, number]>([0, 0]);
  const [textMap, setTextMap] = useState<Texture>(null);

  const { camera } = useThree();
  const { isPresenting, player } = useXR();

  useEffect(() => {
    async function loadMaps() {
      const { height, src, width } = generateTextPlane(paragraphs)!;

      setBackgroundMap(
        await new TextureLoader().loadAsync(
          generateBackgroundPlane(width * 1.1, height * 1.1),
        ),
      );
      setTextMap(await new TextureLoader().loadAsync(src));
      setWidthHeight([width / 500, height / 500]);
    }

    loadMaps();
  }, [paragraphs]);

  useFrame(() => {
    if (!containerRef) {
      return;
    }

    const lookAt = isPresenting ? player.children[0] : camera;
    containerRef.current!.lookAt(lookAt.position);
  });

  if (!backgroundMap || !textMap) {
    return null;
  }

  return (
    <group ref={containerRef}>
      <mesh position={[0, 0, -0.015]}>
        <planeGeometry
          args={widthHeight.map((xy) => xy * 1.1) as [number, number]}
        />
        <meshBasicMaterial map={backgroundMap} transparent />
      </mesh>
      <mesh position={[0.015, -0.05, 0.015]}>
        <planeGeometry args={widthHeight} />
        <meshBasicMaterial map={textMap} transparent />
      </mesh>
    </group>
  );
};
