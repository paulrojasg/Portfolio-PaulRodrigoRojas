/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 scene.gltf 
Author: zcythe (https://sketchfab.com/zcythe)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/boppin-ariados-d3d9fed0764743a8a4c7b884f801812d
Title: Boppin' Ariados
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Insect = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/assets/models/insect/scene.gltf')
  const { actions } = useAnimations(animations, group)

  useEffect(()=>{
    const action = actions["boppin"];
    action.play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} position={[0,-2, 1]} scale={8.975}>
          <group name="dbdca8658ad34f5f91de7f46d3590cd1fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Ariados">
                  <group name="Rig" scale={[1.011, 1.027, 1.011]}>
                    <group name="Object_6">
                      <primitive object={nodes._rootJoint}/>
                      <group name="Object_34" />
                      <skinnedMesh name="Object_35" geometry={nodes.Object_35.geometry} material={materials.Limbs} skeleton={nodes.Object_35.skeleton} />
                      <skinnedMesh name="Object_36" geometry={nodes.Object_36.geometry} material={materials.Horns} skeleton={nodes.Object_36.skeleton} />
                      <skinnedMesh name="Object_37" geometry={nodes.Object_37.geometry} material={materials.pupil} skeleton={nodes.Object_37.skeleton} />
                      <skinnedMesh name="Object_38" geometry={nodes.Object_38.geometry} material={materials.MAT_Main} skeleton={nodes.Object_38.skeleton} />
                      <skinnedMesh name="Object_39" geometry={nodes.Object_39.geometry} material={materials.Refl} skeleton={nodes.Object_39.skeleton} />
                      <skinnedMesh name="Object_40" geometry={nodes.Object_40.geometry} material={materials.Sclera} skeleton={nodes.Object_40.skeleton} />
                    </group>
                  </group>
                </group>
                <group name="Ariados1" />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default Insect;
useGLTF.preload('/assets/models/insect/scene.gltf')
