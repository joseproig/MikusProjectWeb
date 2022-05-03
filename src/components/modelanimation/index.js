import { useGLTF, useAnimations} from "@react-three/drei";
import  {useRef,useEffect, useState } from "react";
import sceneEat from "./../../assets/3DModels/sleep3_con.glb"
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ModelAnimation(props) {
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
    const { actions } = useAnimations(animations, group)
    return (
      <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Bip002"
          position={[0.04, 0.29, 0]}
          rotation={[1.55, -0.89, 1.55]}
          scale={[3.5, 3.5, 3.5]}
        >
          <group
            name="Bip002_Footsteps"
            position={[0, -0.11, 0.09]}
            rotation={[0.09, 1.56, -0.77]}
          />
          <primitive object={nodes.Bip002_Pelvis} />
          <skinnedMesh
            name="mikus"
            geometry={nodes.mikus.geometry}
            material={nodes.mikus.material}
            skeleton={nodes.mikus.skeleton}
          />
        </group>
        <mesh
          name="cojin"
          castShadow
          receiveShadow
          geometry={nodes.cojin.geometry}
          material={materials["Material.001"]}
          position={[-2.01, 0.06, 0]}
          rotation={[0, 0, -0.03]}
          scale={[0.32, 0.29, 0.29]}
        />
        <mesh
          name="Sphere003"
          castShadow
          receiveShadow
          geometry={nodes.Sphere003.geometry}
          material={nodes.Sphere003.material}
          position={[-1.65, 1.05, 0.83]}
          rotation={[-0.13, 0.49, -0.67]}
          scale={[3.55, 3.55, 3.55]}
        />
        <mesh
          name="Sphere004"
          castShadow
          receiveShadow
          geometry={nodes.Sphere004.geometry}
          material={nodes.Sphere004.material}
          position={[-1.9, 0.59, 0.84]}
          rotation={[-0.13, 0.49, -0.67]}
          scale={[3.55, 3.55, 3.55]}
        />
      </group>
    </group>
    );
}
useGLTF.preload(sceneEat);
export default ModelAnimation;