import { useGLTF, useAnimations} from "@react-three/drei";
import  { Suspense, useEffect, useRef } from "react";
import scenePersonaje from "./../../assets/3DModels/jabon_2_animated_con.glb"
import Loader from "./../loader"


function ModelAnimation(props) {
    //I have used https://gltf.pmnd.rs/ to obtain this:
    // This reference gives us direct access to the Mesh object (A Mesh is a basic scene object in three.js, and it's used to hold the geometry and the material needed to represent a shape in 3D space.)
    const group = useRef();

    const { nodes, materials, animations } = useGLTF(scenePersonaje);
    const { actions } = useAnimations(animations, group);
    //We indicate to React that the component wants to do something after renderize!
    useEffect(()=>{
        actions.animationSphere.play();
    });
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
        </group>);
}
useGLTF.preload(scenePersonaje);
export default ModelAnimation;