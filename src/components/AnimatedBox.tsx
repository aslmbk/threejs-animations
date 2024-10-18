import * as THREE from "three";
import { RoundedBox } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useRef } from "react";

export const AnimatedBox = ({
  boxPositions,
  ...props
}: {
  boxPositions: { x: number; y: number; z: number }[];
} & GroupProps) => {
  const box = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!box.current) return;
    const seconds = Math.floor(clock.getElapsedTime());
    const targetPosition = boxPositions[seconds % boxPositions.length];
    box.current.position.lerp(targetPosition, 0.05);
  });

  return (
    <group {...props}>
      <RoundedBox
        scale={0.5}
        position-x={boxPositions[0].x}
        position-y={boxPositions[0].y}
        position-z={boxPositions[0].z}
        ref={box}
      >
        <meshStandardMaterial color="white" />
      </RoundedBox>
    </group>
  );
};
