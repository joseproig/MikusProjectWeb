import { useGLTF, useAnimations} from "@react-three/drei";
import  {useRef,useEffect, useState } from "react";
import sceneEat from "./../../assets/3DModels/eat_con3.glb"
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

      /*animations.forEach(( clip ) => {
        mixer.clipAction(clip).play();
      });*/
      /*actions.current = { idle: mixer.clipAction(animations[0], group.current) }
      console.log(animations);
      actions.current.idle.play();*/

      actions.current = { idle: mixer.clipAction(animations[0], group.current) }
      console.log(animations);
      actions.current.idle.play();
      actions.current2 = { idle: mixer.clipAction(animations[16], group.current) }
      console.log(animations);
      actions.current2.idle.play();
      
      
      
      return () => animations.forEach((clip) => mixer.uncacheClip(clip))
    }, []);
    const { actions } = useAnimations(animations, group)
    return (
      /*<group ref={group} {...props} dispose={null}>
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
    </group>*/
      <group ref={group} {...props} dispose={null}>
      <group name="Bip002" position={[-0.01, 0.1, 0]} rotation={[0, -1.57, 0]} scale={[4, 4, 4]}>
        <primitive object={nodes.Bip002_Pelvis} />
        <skinnedMesh geometry={nodes.mikus.geometry} material={nodes.mikus.material} skeleton={nodes.mikus.skeleton} />
      </group>
      <mesh
        name="Sphere002"
        geometry={nodes.Sphere002.geometry}
        material={nodes.Sphere002.material}
        position={[0.32, 2.33, 0.87]}
        rotation={[-2.63, 0.1, 0.18]}
        scale={4.06}
      />
      <mesh
        name="Sphere003"
        geometry={nodes.Sphere003.geometry}
        material={nodes.Sphere003.material}
        position={[-0.3, 2.32, 0.91]}
        rotation={[-2.67, -0.13, -0.02]}
        scale={[-4.06, -4.06, -4.06]}
      />
      <group name="hamburger" position={[-1.21, 0.74, 0.85]} rotation={[1.42, 0.12, 0.01]} scale={[0.38, 0.32, 0.38]}>
        <mesh geometry={nodes.Malla008.geometry} material={materials['Material_005.001']} />
        <mesh geometry={nodes.Malla008_1.geometry} material={materials['Material_007.001']} />
        <mesh geometry={nodes.Malla008_2.geometry} material={materials['Material_006.001']} />
        <mesh geometry={nodes.Malla008_3.geometry} material={materials['Material_003.001']} />
        <mesh geometry={nodes.Malla008_4.geometry} material={materials['Material_004.001']} />
        <mesh geometry={nodes.Malla008_5.geometry} material={materials['Material_002.001']} />
        <mesh geometry={nodes.Malla008_6.geometry} material={materials['Material_008.001']} />
      </group>
      <group name="box" position={[-1.42, 0.49, 0.15]} scale={[0.53, 0.78, 0.53]}>
        <mesh geometry={nodes.Malla009.geometry} material={materials['Material_001.001']} />
        <mesh geometry={nodes.Malla009_1.geometry} material={materials['Material.002']} />
      </group>
    </group>
    );
}
useGLTF.preload(sceneEat);
export default ModelAnimation;