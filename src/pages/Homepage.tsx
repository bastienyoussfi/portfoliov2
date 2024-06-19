import Header from '../components/Header'
import Footer from '../components/Footer'
import Body from '../components/Body'

import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'
import { Toaster } from "@/components/ui/sonner"

export default function Homepage() {

  return (
    <div className="font-sans">
      <ShaderGradientCanvas
            importedFiber={{ ...fiber, ...drei, ...reactSpring }}
            style={{
            position: 'absolute',
            top: 0,
            pointerEvents: "none",
            }}
            >
            <ShaderGradient
              control='query'
              urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.8&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%238d7dca&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=0.7&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&toggleAxis=false&type=waterPlane&uAmplitude=0&uDensity=1.1&uFrequency=0&uSpeed=0.1&uStrength=1&uTime=8&wireframe=false'
              >
          </ShaderGradient>
      </ShaderGradientCanvas>
      <Header />
      <Body />
      <Toaster />
      <Footer />
    </div>
  )
}