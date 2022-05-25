import { useGLTF } from "@react-three/drei";
import  {useRef,useEffect, useState } from "react";
import sceneEat from "./../../assets/3DModels/eatMikus_con.glb"
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ModelAnimationEat(props) {
    //First i have used gltf-pipeline -i jabon_2_animated_unc.glb -o jabon_2_animated_con.glb --draco.compressionLevel=10 to compress animation
    //I have used https://gltf.pmnd.rs/ to obtain this:
    // This reference gives us direct access to the Mesh object (A Mesh is a basic scene object in three.js, and it's used to hold the geometry and the material needed to represent a shape in 3D space.)
    const group = useRef();

    const { nodes, materials,animations } = useGLTF(sceneEat);
    //const { nodes, materials, animations } = useGLTF(sceneEat);
    //const { actions } = useAnimations(animations, group);
    //We indicate to React that the component wants to do something after renderize!
    const [mixer] = useState(() => new THREE.AnimationMixer())
    useFrame((state, delta) => mixer.update(delta))
    useEffect(() => {

      animations.forEach(( clip ) => {
        mixer.clipAction(clip, group.current).play();
      });
      /*actions.current = { idle: mixer.clipAction(animations[0], group.current) }
      console.log(animations);
      actions.current.idle.play();*/

      /*actions.current = { idle: mixer.clipAction(animations[0], group.current) }
      console.log(animations);
      actions.current.idle.play();*/

      /*actions.current2 = { idle: mixer.clipAction(animations[16], group.current) }
      console.log(animations);
      actions.current2.idle.play();*/
      
      
      
      return () => animations.forEach((clip) => mixer.uncacheClip(clip))
    }, []);
    //const { actions } = useAnimations(animations, group)
    return (
        <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group
            name="Bip002"
            position={[0, 0.09, 0]}
            rotation={[0, -1.57, 0]}
            scale={[3.5, 3.5, 3.5]}
          >
            <group
              name="Bip002_Footsteps"
              position={[0, -0.13, 0]}
              rotation={[0, 1.57, 0]}
            />
            <primitive object={nodes.Bip002_Pelvis} />
            <skinnedMesh
              name="mikus"
              geometry={nodes.mikus.geometry}
              material={nodes.mikus.material}
              skeleton={nodes.mikus.skeleton}
            />
          </group>
          <group
            name="hamburger"
            position={[-1.06, 0.65, 0.74]}
            rotation={[1.42, 0.12, 0.01]}
            scale={[0.34, 0.28, 0.34]}
          >
            <mesh
              name="Mesh002"
              castShadow
              receiveShadow
              geometry={nodes.Mesh002.geometry}
              material={materials.Material_005}
            />
            <mesh
              name="Mesh002_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh002_1.geometry}
              material={materials.Material_007}
            />
            <mesh
              name="Mesh002_2"
              castShadow
              receiveShadow
              geometry={nodes.Mesh002_2.geometry}
              material={materials.Material_006}
            />
            <mesh
              name="Mesh002_3"
              castShadow
              receiveShadow
              geometry={nodes.Mesh002_3.geometry}
              material={materials.Material_003}
            />
            <mesh
              name="Mesh002_4"
              castShadow
              receiveShadow
              geometry={nodes.Mesh002_4.geometry}
              material={materials.Material_004}
            />
            <mesh
              name="Mesh002_5"
              castShadow
              receiveShadow
              geometry={nodes.Mesh002_5.geometry}
              material={materials.Material_002}
            />
            <mesh
              name="Mesh002_6"
              castShadow
              receiveShadow
              geometry={nodes.Mesh002_6.geometry}
              material={materials.Material_008}
            />
          </group>
          <group
            name="box"
            position={[-1.25, 0.43, 0.13]}
            scale={[0.46, 0.68, 0.46]}
          >
            <mesh
              name="Mesh003"
              castShadow
              receiveShadow
              geometry={nodes.Mesh003.geometry}
              material={materials.Material_001}
            />
            <mesh
              name="Mesh003_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh003_1.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <mesh
            name="Sphere002"
            castShadow
            receiveShadow
            geometry={nodes.Sphere002.geometry}
            material={nodes.Sphere002.material}
            position={[0.28, 2.04, 0.76]}
            rotation={[-2.63, 0.1, 0.18]}
            scale={[3.55, 3.55, 3.55]}
          />
          <mesh
            name="Sphere003"
            castShadow
            receiveShadow
            geometry={nodes.Sphere003.geometry}
            material={nodes.Sphere003.material}
            position={[-0.25, 2.06, 0.78]}
            rotation={[-2.63, 0.1, 0.18]}
            scale={[3.55, 3.55, 3.55]}
          />
        </group>
      </group>
    );
}
useGLTF.preload(sceneEat);
export default ModelAnimationEat;