import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import MainScene from "./MainScene";

export default function MainCanvas() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0">
      <Canvas
        makeDefault
        shadows
        dpr={[1, 2]}
        camera={{ fov: 55, position: [0, 0, 8] }}
      >
        <Environment files="./images/lobby.hdr" environmentIntensity={1} />
        <MainScene />
      </Canvas>
    </div>
  );
}
