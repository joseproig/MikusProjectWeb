import { useGLTF, useAnimations} from "@react-three/drei";
import  {useRef,useEffect, useState } from "react";
//import sceneIdle from "./../../assets/3DModels/eat.gif"
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ModelAnimationIdle(props) {
    
    //const { actions } = useAnimations(animations, group)
    return (
      <img src={require('./../../assets/3DModels/eat.gif')} width="840" height="400" alt="loading..." />
    );
}
export default ModelAnimationIdle;