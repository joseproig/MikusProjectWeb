import { useGLTF } from "@react-three/drei";
import  {useRef,useEffect, useState } from "react";
import sceneJabon from "./../../assets/3DModels/jabon_2_animated_con.glb"
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function TestAnimation(props) {
    //First i have used gltf-pipeline -i jabon_2_animated_unc.glb -o jabon_2_animated_con.glb --draco.compressionLevel=10 to compress animation
    //I have used https://gltf.pmnd.rs/ to obtain this:
    // This reference gives us direct access to the Mesh object (A Mesh is a basic scene object in three.js, and it's used to hold the geometry and the material needed to represent a shape in 3D space.)
    const group = useRef();

    const { nodes, materials,animations } = useGLTF(sceneJabon);
    //const { nodes, materials, animations } = useGLTF(sceneJabon);
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
          <mesh
            name="Sphere001"
            castShadow
            receiveShadow
            geometry={nodes.Sphere001.geometry}
            material={materials["Material.002"]}
            position={[-0.57, 0.08, 0.04]}
            scale={[1.95, 0.92, 2.78]}
          >
            <mesh
              name="Text"
              castShadow
              receiveShadow
              geometry={nodes.Text.geometry}
              material={materials["Material.003"]}
              position={[0.2, 0.89, 0.36]}
              rotation={[-2.54, 1.54, 2.52]}
              scale={[0.36, 1.08, 0.51]}
            />
            <mesh
              name="Text001"
              castShadow
              receiveShadow
              geometry={nodes.Text001.geometry}
              material={materials["Material.004"]}
              position={[0.18, -0.91, -0.36]}
              rotation={[1.09, 1.52, 2.03]}
              scale={[0.36, 1.08, 0.51]}
            />
          </mesh>
        </group>
      </group>
    );
}
useGLTF.preload(sceneJabon);
export default TestAnimation;