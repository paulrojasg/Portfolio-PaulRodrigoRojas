/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";


function UVLogo(props) {
  const { nodes, materials } = useGLTF("/assets/models/uvlogo/uvlogo.gltf");

  const uRef = useRef();
  const vRef = useRef();

  useFrame((state, delta)=>{
    uRef.current.position.y = Math.cos(state.clock.getElapsedTime());
    vRef.current.position.y = Math.cos(state.clock.getElapsedTime()) + 0.5;
  })

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Material.001"]}
        position={[-0.105, 1.193, 1.117]}
        rotation={[-3.132, 0, 0]}
        scale={[0.051, 1, 0.683]}
        ref = {uRef}
      >
        <meshStandardMaterial color="white"/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[0.924, 1.746, -0.316]}
        ref = {vRef}
      >
        <meshStandardMaterial color="red"/>
      </mesh>
      
    </group>
  );
}

export default UVLogo;
useGLTF.preload("/assets/models/uvlogo/uvlogo.gltf");

