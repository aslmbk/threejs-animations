import { Canvas } from "@react-three/fiber";
import { Environment, ScrollControls } from "@react-three/drei";
import { Experience } from "./components/Experience";

export const App: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 42 }}>
      <ScrollControls pages={3}>
        <Experience />
        <Environment preset="sunset" />
      </ScrollControls>
    </Canvas>
  );
};
