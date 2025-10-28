import { Environment, Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import MainScene from "./MainScene";

export default function MainCanvas() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0">
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 55, position: [0, 0, 8] }}>
        <Suspense fallback={null}>
          <Environment files="./images/lobby.hdr" environmentIntensity={1} />

          <MainScene />
        </Suspense>
      </Canvas>

      <Loader containerStyles={{ background: "rgba(0,0,0,0.65)" }} />
    </div>
  );
}
