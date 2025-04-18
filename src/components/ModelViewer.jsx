import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, Stage } from '@react-three/drei';

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export default function ModelViewer({ modelUrl }) {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Stage environment="city" intensity={0.6}>
          <Model url={modelUrl} />
        </Stage>
        <OrbitControls autoRotate />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
} 