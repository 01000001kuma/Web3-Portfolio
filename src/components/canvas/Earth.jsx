import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Earth = () => {
  return (
    <div>Earth</div>
  )
}

const EarthModel = () => {

  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{oreserveDrawingBuffer: true}}
      camera={{}}
    >
      <Suspense fallback={<CanvasLoader />}>
        
      </Suspense>  
    </Canvas>
  )
}

export default Earth