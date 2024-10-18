import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const Background: React.FC = () => {
  const scrollData = useScroll();

  const skyMaterial = useRef<THREE.MeshBasicMaterial>(null);
  const tl = useRef<gsap.core.Timeline>();
  const skyData = useRef({
    color: "#313131",
  });

  useEffect(() => {
    tl.current = gsap.timeline();
    tl.current
      .to(skyData.current, {
        duration: 1,
        color: "#ffc544",
      })
      .to(skyData.current, {
        duration: 1,
        color: "#7c4e9f",
      });
    tl.current.pause();
  }, []);

  useFrame(() => {
    if (!tl.current || !skyMaterial.current) {
      return;
    }
    tl.current.progress(scrollData.offset);
    skyMaterial.current.color.set(skyData.current.color);
  });

  return (
    <mesh rotation-x={Math.PI / 4}>
      <sphereGeometry args={[16, 32, 32]} />
      <meshBasicMaterial
        side={THREE.BackSide}
        color={"#313131"}
        ref={skyMaterial}
      />
    </mesh>
  );
};
