import { useGLTF, useAnimations} from "@react-three/drei";
import  {useRef,useEffect, useState } from "react";
import sceneShower from "./../../assets/3DModels/shower_con.glb"
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ModelAnimationShower(props) {
    //First i have used gltf-pipeline -i jabon_2_animated_unc.glb -o jabon_2_animated_con.glb --draco.compressionLevel=10 to compress animation
    //I have used https://gltf.pmnd.rs/ to obtain this:
    // This reference gives us direct access to the Mesh object (A Mesh is a basic scene object in three.js, and it's used to hold the geometry and the material needed to represent a shape in 3D space.)
    const group = useRef();

    const { nodes, materials,animations } = useGLTF(sceneShower);
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
          position={[0, 1.34, 0]}
          rotation={[0, -1.57, 0]}
          scale={[3.5, 3.5, 3.5]}
        >
          <group
            name="Bip002_Footsteps"
            position={[0, -0.36, 0]}
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
        <mesh
          name="Sphere004"
          castShadow
          receiveShadow
          geometry={nodes.Sphere004.geometry}
          material={nodes.Sphere004.material}
          position={[-420, 3.34, 0.77]}
          rotation={[-2.5, 0.08, -0.25]}
          scale={[-3.55, -3.55, -3.55]}
        />
        <mesh
          name="Sphere001"
          castShadow
          receiveShadow
          geometry={nodes.Sphere001.geometry}
          material={nodes.Sphere001.material}
          position={[420, 3.32, 0.73]}
          rotation={[-2.5, -0.08, 0.25]}
          scale={[3.55, 3.55, 3.55]}
        />
        <mesh
          name="Sphere001001"
          castShadow
          receiveShadow
          geometry={nodes.Sphere001001.geometry}
          material={nodes.Sphere001001.material}
          position={[420, 3.32, 0.73]}
          rotation={[-2.5, -0.08, 0.25]}
          scale={[3.55, 3.55, 3.55]}
        />
        <mesh
          name="Sphere004001"
          castShadow
          receiveShadow
          geometry={nodes.Sphere004001.geometry}
          material={nodes.Sphere004001.material}
          position={[-420, 3.34, 0.77]}
          rotation={[-2.5, 0.08, -0.25]}
          scale={[-3.55, -3.55, -3.55]}
        />
        <mesh
          name="Sphere001_1"
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_1.geometry}
          material={nodes.Sphere001_1.material}
          position={[-0.25, 1.8, 0.45]}
          rotation={[1.73, 0.14, 0.31]}
          scale={[0.18, 0.08, 0.25]}
        />
        <mesh
          name="Sphere002"
          castShadow
          receiveShadow
          geometry={nodes.Sphere002.geometry}
          material={nodes.Sphere002.material}
          position={[0.27, 3.32, 0.73]}
          rotation={[-2.5, -0.08, 0.25]}
          scale={[3.55, 3.55, 3.55]}
        />
        <mesh
          name="Sphere005"
          castShadow
          receiveShadow
          geometry={nodes.Sphere005.geometry}
          material={nodes.Sphere005.material}
          position={[-0.26, 3.32, 0.76]}
          rotation={[-2.51, 0.51, -0.01]}
          scale={[3.55, 3.55, 3.55]}
        />
      </group>
    </group>
    );
}
useGLTF.preload(sceneShower);
export default ModelAnimationShower;