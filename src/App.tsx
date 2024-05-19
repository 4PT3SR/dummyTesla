import { useState } from "react"
import { clsx } from "clsx"
import Nav from "./components/Nav"
import Car from "./components/car"
import ColorContext  from './contexts/colorContext'
import { colorType } from "./contexts/colorContext"
import { red } from "./utils/colorscheme"
import Footer from "./components/footer"
const App = () => {
  const [color,setColor] = useState<colorType>(red)
  // const [ccolor,setCcolor] = useState<string>('tomato')

  return (
    <ColorContext.Provider value={{color,setColor}}>
    <div className="bg-black w-screen h-screen overflow-hidden">
      <div className={clsx(`w-full h-full half text-yellow-600`)} style={{backgroundColor:color}}>
        
      </div>
      <div className="w-screen h-screen  absolute top-0 px-2 md:px-20 flex flex-col justify-between pb-2 overflow-x-scroll no-scrollbar ">
      <Nav></Nav>
      <Car></Car>
      <Footer />
      </div>
    </div>
    </ColorContext.Provider>
  )
}

export default App