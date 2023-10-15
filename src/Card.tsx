/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 card.glb --transform --types 
Files: card.glb [28.56KB] > card-transformed.glb [8.3KB] (71%)
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { FC } from 'react';

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
  }
}

const Card: FC<JSX.IntrinsicElements['group']> = (props) => {
  const { nodes, materials } = useGLTF('/card-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} />
    </group>
  )
}

useGLTF.preload('/card-transformed.glb')

export default Card;