import { gsap } from "@/lib/gsapSetup"; // <-- use setup
import { useGSAP } from "@gsap/react";
import { Float, useGLTF } from "@react-three/drei";
import { useRef } from "react";

const MainScene = () => {
  const can1Ref = useRef();
  const can1SpinRef = useRef();
  const can2Ref = useRef();
  const can2SpinRef = useRef();
  const cansRef = useRef();
  const initialPos = [1, -0.5, 1];
  const initalRotation = [0, 0, 0.2];
  const { nodes, materials } = useGLTF("/redbull.glb");

  useGSAP(() => {
    gsap
      .timeline()
      .from(cansRef.current.position, {
        x: 0,
        y: -8,
        z: 0,
        ease: "circ.out",
        duration: 1,
        delay: 0.4,
      })
      .to(
        can1Ref.current.rotation,
        {
          x: 0,
          y: Math.PI * 2,
          duration: 1,
        },
        "<"
      )
      .to(
        can2SpinRef.current.rotation,
        {
          x: 0,
          y: Math.PI * 2,
        },
        "<"
      );

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    // MAIN CAN
    timeline
      .to(can1Ref.current.position, {
        x: 0.5,
        y: 0.4,
        z: 3,
        ease: "power1.inOut",
      })
      .to(can1Ref.current.position, {
        x: 3,
        y: 0,
        z: 2,
        duration: 1.5,
        ease: "power1.inOut",
      })
      .to(
        can1Ref.current.rotation,
        { x: 0, y: "+=" + Math.PI * 2, z: -0.2, duration: 2, ease: "back.out" },
        0
      )
      .to(can1Ref.current.position, {
        x: 0,
        y: 0,
        z: 3,
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        can1Ref.current.rotation,
        {
          x: 0,
          y: "-=" + Math.PI * 2,
          z: 0,
          duration: 1,
        },
        "<"
      )
      .to(can1Ref.current.position, { x: 0, z: 0, y: 0 });
    // .to(can1SpinRef.current.rotation, { y: 0, x: 0, z: 0 });

    const timelineBg = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "20% top",
        scrub: true,
      },
    });

    timelineBg
      .to(can2Ref.current.position, {
        z: -6,
        x: 0,
        y: 12,
        duration: 1.5,
      })
      .to(
        can2Ref.current.rotation,
        {
          y: Math.PI * 2,
          x: Math.PI * 0.5,
          duration: 1.5,
        },
        "<"
      )
      .to(can2Ref.current.scale, { x: 0.01, y: 0.01, z: 0.01 });
  });

  return (
    <>
      <group ref={cansRef}>
        <Float speed={2.5} rotationIntensity={0} floatIntensity={2}>
          <group
            ref={can1Ref}
            dispose={null}
            position={initialPos}
            rotation={initalRotation}
            scale={[1, 2, 1]}
          >
            <group
              ref={can1SpinRef}
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={[1, 1, 1]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4.geometry}
                material={materials["Material.001"]}
              />
              <group
                position={[-0.001, 0.982, 0.001]}
                scale={[0.568, 0.42, 0.568]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials["Material.002"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_9.geometry}
                  material={materials["Material.002"]}
                />
              </group>
              <group
                position={[0.023, 0.987, 0.001]}
                scale={[0.523, 0.404, 0.523]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_15.geometry}
                  material={materials["Material.002"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials["Material.002"]}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6.geometry}
                material={materials["Material.002"]}
                position={[-0.001, 0.955, 0.012]}
                scale={[0.851, 0.365, 0.851]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_11.geometry}
                material={materials["Material.002"]}
                position={[-0.005, -0.147, 0.001]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_13.geometry}
                material={materials["Material.002"]}
                position={[-0.001, -0.147, 0.001]}
              />
            </group>
          </group>
        </Float>
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={0.4} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with
        >
          <group
            ref={can2Ref}
            dispose={null}
            position={[2.5, -0.5, 0]}
            rotation={[0, 0, -0.5]}
            scale={[1, 2, 1]}
          >
            <group
              ref={can2SpinRef}
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={[1, 1, 1]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4.geometry}
                material={materials["Material.001"]}
              />
              <group
                position={[-0.001, 0.982, 0.001]}
                scale={[0.568, 0.42, 0.568]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials["Material.002"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_9.geometry}
                  material={materials["Material.002"]}
                />
              </group>
              <group
                position={[0.023, 0.987, 0.001]}
                scale={[0.523, 0.404, 0.523]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_15.geometry}
                  material={materials["Material.002"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials["Material.002"]}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6.geometry}
                material={materials["Material.002"]}
                position={[-0.001, 0.955, 0.012]}
                scale={[0.851, 0.365, 0.851]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_11.geometry}
                material={materials["Material.002"]}
                position={[-0.005, -0.147, 0.001]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_13.geometry}
                material={materials["Material.002"]}
                position={[-0.001, -0.147, 0.001]}
              />
            </group>
          </group>
        </Float>
      </group>
    </>
  );
};

useGLTF.preload("/redbull.glb");

export default MainScene;
