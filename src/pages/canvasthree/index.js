import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react';
import BoxAnimation from './../../components/boxanimation';
import ModelAnimation from './../../components/modelanimation';
import { OrbitControls} from "@react-three/drei";
import './styles.css'
import Loader from "./../../components/loader"

function CanvasThree() {
    return (   
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={<Loader />}> 
                <OrbitControls />
                <ModelAnimation />  
            </Suspense> 
        </Canvas>    
    );
}
  
export default CanvasThree;
  