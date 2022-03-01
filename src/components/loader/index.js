import { Html, useProgress } from '@react-three/drei'

function Loader() {
  const { progress } = useProgress()
  return (<Html center>{progress} % cargado. Por favor espere...</Html>)
}

export default Loader;