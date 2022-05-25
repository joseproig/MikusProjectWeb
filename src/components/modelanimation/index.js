import { useGLTF } from "@react-three/drei";
import  {useRef,useEffect, useState } from "react";
import sceneEat from "./../../assets/3DModels/sleep3_con.glb"
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ModelAnimationSleep(props) {
    
  //const { actions } = useAnimations(animations, group)
  return (
    <img src={require('./../../assets/3DModels/sleep.gif')} width="840" height="400" alt="loading..." />
  );
}
export default ModelAnimationSleep;