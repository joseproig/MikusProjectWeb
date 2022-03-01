import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'


function BoxAnimation(props) {
  // This reference gives us direct access to the Mesh object (A Mesh is a basic scene object in three.js, and it's used to hold the geometry and the material needed to represent a shape in 3D space.)
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  // This hook calls you back every frame
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01
  }
  )
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={3}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default BoxAnimation;
