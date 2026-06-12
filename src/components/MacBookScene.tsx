import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import MacBook3D from "./MacBook3D";

export default function MacBookScene() {
  return (
    <Canvas
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      aria-hidden
    >
      <ambientLight intensity={0.4} />
      {/* sunset rim, right */}
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#FF8C42" />
      {/* aurora purple fill, left */}
      <directionalLight position={[-5, 2, -5]} intensity={0.4} color="#A855F7" />
      {/* pink top light */}
      <pointLight position={[0, 10, 0]} intensity={0.5} color="#FF4D8F" />
      <Suspense fallback={null}>
        <MacBook3D scale={0.95} position={[0, -0.15, 0]} />
      </Suspense>
    </Canvas>
  );
}
