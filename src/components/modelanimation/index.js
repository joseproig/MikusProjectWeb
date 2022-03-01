import { useGLTF, useAnimations} from "@react-three/drei";
import  { Suspense, useEffect, useRef } from "react";
import scenePersonaje from "./../../assets/3DModels/jabon_2_animated_con.glb"
import sceneEat from "./../../assets/3DModels/eat_con.glb"
import Loader from "./../loader"


function ModelAnimation(props) {
    //First i have used gltf-pipeline -i jabon_2_animated_unc.glb -o jabon_2_animated_con.glb --draco.compressionLevel=10 to compress animation
    //I have used https://gltf.pmnd.rs/ to obtain this:
    // This reference gives us direct access to the Mesh object (A Mesh is a basic scene object in three.js, and it's used to hold the geometry and the material needed to represent a shape in 3D space.)
    const group = useRef();

    const { nodes, materials, animations } = useGLTF(sceneEat);
    const { actions } = useAnimations(animations, group);
    //We indicate to React that the component wants to do something after renderize!
    useEffect(()=>{
        //actions.animationSphere.play();
    });
    return (
      <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.mikus.geometry}
        material={nodes.mikus.material}
        position={[0, -0.22, -0.09]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.92}
      />
      <mesh
        geometry={nodes.Sphere002.geometry}
        material={nodes.Sphere002.material}
        position={[0.08, 0.58, 0.22]}
        rotation={[2.09, -0.17, 0.1]}
        scale={[1.02, 1.02, 1.02]}
      />
      <mesh
        geometry={nodes.Sphere003.geometry}
        material={nodes.Sphere003.material}
        position={[-0.08, 0.58, 0.23]}
        rotation={[2.04, 0.02, -0.13]}
        scale={[-1.02, 1.02, 1.02]}
      />
      <group position={[-0.3, 0.18, 0.21]} rotation={[-0.15, -0.01, 0.12]} scale={[0.1, 0.1, 0.08]}>
        <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} />
        <mesh geometry={nodes.mesh_3_1.geometry} material={nodes.mesh_3_1.material} />
        <mesh geometry={nodes.mesh_3_2.geometry} material={nodes.mesh_3_2.material} />
        <mesh geometry={nodes.mesh_3_3.geometry} material={nodes.mesh_3_3.material} />
        <mesh geometry={nodes.mesh_3_4.geometry} material={nodes.mesh_3_4.material} />
        <mesh geometry={nodes.mesh_3_5.geometry} material={nodes.mesh_3_5.material} />
        <mesh geometry={nodes.mesh_3_6.geometry} material={nodes.mesh_3_6.material} />
      </group>
      <group position={[-0.36, 0.12, 0.04]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.13, 0.13, 0.2]}>
        <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />
        <mesh geometry={nodes.mesh_4_1.geometry} material={nodes.mesh_4_1.material} />
      </group>
    </group>);
}
useGLTF.preload(sceneEat);
export default ModelAnimation;