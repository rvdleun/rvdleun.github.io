import { FC, useEffect, useState } from "react";
import {
  generateBackgroundPlane,
  generateTextPlane,
  TextPlaneSettings,
} from "../utils/TextPlane.utils.ts";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Texture } from "three";

export const TextPlane: FC<{ paragraphs: TextPlaneSettings[] }> = ({
  paragraphs,
}) => {
  const [backgroundMap, setBackgroundMap] = useState<string | null>(null);
  const [widthHeight, setWidthHeight] = useState<[number, number]>([0, 0]);
  const [textMap, setTextMap] = useState<Texture>(null);

  useEffect(() => {
    async function loadMaps() {
      const { height, src, width } = generateTextPlane(paragraphs);

      setBackgroundMap(
        await new TextureLoader().loadAsync(
          generateBackgroundPlane(width * 1.1, height * 1.1),
        ),
      );
      setTextMap(await new TextureLoader().loadAsync(src));
      setWidthHeight([width / 10, height / 10]);
    }

    loadMaps();
  }, [paragraphs]);

  // console.log(src, paragraphs);

  console.log(textMap);
  if (!textMap) {
    return null;
  }

  return (
    <group>
      <mesh position={[0, 0, -0.1]}>
        <planeGeometry args={widthHeight.map((xy) => xy * 1.1)} />
        <meshBasicMaterial map={backgroundMap} transparent />
      </mesh>
      <mesh>
        <planeGeometry args={widthHeight} />
        <meshBasicMaterial map={textMap} transparent />
      </mesh>
    </group>
  );
};
