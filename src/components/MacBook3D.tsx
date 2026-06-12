import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const MODEL_URL = "/assets/macbook_pro_m3_16_inch_2024/scene.gltf";

type MacBook3DProps = {
  scale?: number;
  position?: [number, number, number];
};

export default function MacBook3D({
  scale = 1.2,
  position = [0, -0.5, 0],
}: MacBook3DProps) {
  const tiltRef = useRef<THREE.Group>(null);
  const spinRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const { scene } = useGLTF(MODEL_URL);

  // Sketchfab exports carry arbitrary units; recenter the model and fit its
  // largest dimension to ~3 world units so `scale` behaves predictably.
  // Materials and textures from the GLTF are left untouched.
  const fit = useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const factor = 3 / Math.max(size.x, size.y, size.z);
    return { factor, center };
  }, [scene]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame(() => {
    if (spinRef.current) spinRef.current.rotation.y += 0.003;
    if (tiltRef.current) {
      tiltRef.current.rotation.x = THREE.MathUtils.lerp(
        tiltRef.current.rotation.x,
        mouse.current.y * 0.15,
        0.05
      );
      tiltRef.current.rotation.y = THREE.MathUtils.lerp(
        tiltRef.current.rotation.y,
        mouse.current.x * 0.15,
        0.05
      );
    }
  });

  return (
    <group ref={tiltRef} position={position}>
      <group ref={spinRef} scale={scale * fit.factor}>
        <primitive
          object={scene}
          position={[-fit.center.x, -fit.center.y, -fit.center.z]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(MODEL_URL);
