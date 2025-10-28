// MainCanvas.jsx
// ------------------------------
// A minimal Canvas with a global loader from @react-three/drei.
// The <Loader /> overlay appears automatically while any assets (like GLTF) are loading.

import { Environment, Loader } from "@react-three/drei"; // Loader is the premade overlay
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react"; // React Suspense to "wait" while assets load
import MainScene from "./MainScene";

export default function MainCanvas() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0">
      <Canvas
        // High-DPI crispness but not too heavy
        dpr={[1, 2]}
        // Enable shadows if you use them
        shadows
        // Set an initial camera
        camera={{ fov: 55, position: [0, 0, 8] }}
      >
        {/* Suspense will "pause" rendering of children until async assets (e.g., GLTF) resolve */}
        <Suspense
          fallback={null /* we use the global <Loader/> below as the visual */}
        >
          {/* HDRI / environment */}
          <Environment files="./images/lobby.hdr" environmentIntensity={1} />

          {/* Your scene that uses useGLTF (suspense-ready) */}
          <MainScene />
        </Suspense>
      </Canvas>

      {/* Premade full-screen loading overlay (progress bar & percent).
          It auto-shows while any drei/three loaders are busy. */}
      <Loader
        containerStyles={{ background: "rgba(0,0,0,0.65)" }} // dim the page slightly (optional)
        // You can omit the props above to keep default styling
      />
    </div>
  );
}
