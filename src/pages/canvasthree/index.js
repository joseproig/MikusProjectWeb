import { Canvas } from '@react-three/fiber'
import React,{ Suspense, useEffect, useState} from 'react';
import ModelAnimationEat from './../../components/modelanimationeat';
import ModelAnimation from './../../components/modelanimation';
import ModelAnimationShower from './../../components/modelanimationshower';
import { OrbitControls} from "@react-three/drei";
import './styles.css';
import Loader from "./../../components/loader";
import firebase from "firebase";

 
let app = firebase;
 




function CanvasThree(props) {
    const {currentAction} = props;
    //const [action,setAction] = useState("Sleep");
    let action = "";
    if (currentAction != null) {
      action = currentAction;
    } else {
      action = "Sleep";
    }

    return (   
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={<Loader />}> 
                <OrbitControls />
                {(action === "Eat" || action === "eat") && <ModelAnimationEat /> }
                {(action === "Sleep" || action === "sleep") && <ModelAnimation /> }
                {(action === "Shower" || action === "shower") && <ModelAnimationShower /> }
            </Suspense> 
        </Canvas>    
    );
}
  
export default CanvasThree;
  