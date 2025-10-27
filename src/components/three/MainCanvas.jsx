import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { getProject } from "@theatre/core";
import { PerspectiveCamera, SheetProvider } from "@theatre/r3f";
import MainScene from "./MainScene";

const project = getProject("RedBull"); // will save in localStorage in dev
const sheet = project.sheet("Main"); // timeline “Main”

export default function MainCanvas() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0">
      <Canvas shadows dpr={[1, 2]}>
        <SheetProvider sheet={sheet}>
          {/* Editable camera (per docs) */}
          <PerspectiveCamera
            theatreKey="Camera"
            makeDefault
            fov={55}
            position={[0, 0, 8]}
          />
          <Environment files="./images/lobby.hdr" environmentIntensity={1} />
          <MainScene />
        </SheetProvider>
      </Canvas>
    </div>
  );
}
