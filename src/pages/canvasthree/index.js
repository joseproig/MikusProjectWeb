import { Canvas } from '@react-three/fiber'
import React,{ Suspense} from 'react';
import ModelAnimationEat from './../../components/modelanimationeat';
import ModelAnimation from './../../components/modelanimation';
import ModelAnimationShower from './../../components/modelanimationshower';
import ModelAnimationIdle from './../../components/modelanimationidle';
import TestAnimation from './../../components/testanimation';
import { OrbitControls} from "@react-three/drei";
import './styles.css';
import Loader from "./../../components/loader";

 
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
                {(action === "Idle" || action === "idle") && <ModelAnimationIdle /> }
            </Suspense> 
        </Canvas>    
    );
}
  
export default CanvasThree;
  