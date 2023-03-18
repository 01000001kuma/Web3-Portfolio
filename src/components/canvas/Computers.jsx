import { Suspense, useEffect, useState } from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Computers = ( isMobile ) => {
  const comuputer = useGLTF('./desktop_pc/scene.gltf')


  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor='black' />
      <pointLight intensity={1} />
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={comuputer.scene} 
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -0.2] : [0, -3.25 -1.5 ]}
        rotation={[-0.01, -0.2, -0.1]}
      
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [ isMobile, setIsMobile ] = useState(false);

  useEffect(() => {
    // add event listener that listen to the screen size
    const mediaQuery = windoy.matchMedia('(max-width: 500px)');

    // set the initial value of the isMobile state variable

    setIsMobile(mediaQuery.matches);

    // define a callback function that will be called when the screen size changes

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // add the callback as a listerner for changes to the media query

    mediaQuery.addEventListener('change', handleMediaQueryChange); 

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }

  } , [])

  return(
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}     
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />

    </Canvas>

  )


}

export default Computers 