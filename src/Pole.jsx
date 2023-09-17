
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 scene.gltf 
Author: kilansky (https://sketchfab.com/kilansky)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/traffic-lamp-8fc87e63dc634b20a26890f09f7b9809
Title: Traffic Lamp
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

 function Pole(props) {
  const { nodes, materials } = useGLTF('/assets/models/pole/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        {/* <mesh geometry={nodes.TrafficLamp_blinn91_0.geometry} material={materials.blinn91} castShadow/> */}
        <mesh geometry={nodes.TrafficLamp_blinn90_0.geometry} material={materials.blinn90} castShadow/>
        <mesh geometry={nodes.TrafficLamp_lambert72_0.geometry} material={materials.lambert72} castShadow/>
      </group>
    </group>
  )
}

export default Pole;
useGLTF.preload('/assets/models/pole/scene.gltf')
