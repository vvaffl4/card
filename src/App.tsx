
import { Float, PerspectiveCamera, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Card from './Card'

function App() {
  return (
    <>
      <Canvas className="canvas" style={{ width: '100%', height: '400px' }}>
        <Stage adjustCamera={false} intensity={0.2} shadows={false} environment="sunset">
          <Float
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
            floatIntensity={.4} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[1, 5]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <Card />
          </Float>
          <pointLight position={[0, 5, 5]} />
          <PerspectiveCamera position={[0, 0, 15]} makeDefault />
        </Stage>
      </Canvas>
      <div className='link_holder'>
        <a href='https://www.smartphonehoesjes.nl/samsung/samsung-galaxy-a13-4g/'>
          <p>Smartphonehoesjes</p>
          <p>{'>'} Voor Samsung A13</p>
        </a>
        <a href='https://www.bol.com/nl/nl/l/samsung-galaxy-a13-telefoonhoesjes/4040/7559338221/'>
          <p>Bol.com</p>
          <p>{'>'} Voor Samsung A13</p></a>
        <a href='https://www.gsmpunt.nl/samsung/galaxy-a13/hoesjes'>
          <p>GMSpunt</p>
          <p>{'>'} Voor Samsung A13</p></a>
      </div>
    </>
  )
}

export default App
