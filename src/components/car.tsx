import { useState,useContext } from 'react'
import CarY  from '../assets/CarY.png'
import CarR from '../assets/CarR.png'
import CarB from '../assets/CarB.png'
import Button from './button'
import ColorContext from '../contexts/colorContext'
import { colorType } from '../contexts/colorContext'
import { red,blue,yellow } from '../utils/colorscheme'
const Car = () => {
    const {setColor} = useContext(ColorContext)
    const [car, setCar] = useState(CarR)

    const setCarColor = (carType:string,colorx:React.SetStateAction<colorType>) => {
        setCar(carType) 
        setColor(colorx)
    }

    
  return (
    <main className=" w-full flex">
        <div className='relative  w-full md:w-[60%] 2xl:w-[70%] m-auto  z-10 h-full'>
        <p className="text-[60px] md:text-[120px] font-bold  text-white/40 font-lato text-center absolute -z-10 top-10 md:top-3 w-full">MODEL 3</p>
        <img src={car} alt="tesla" className='w-full mt-16'/>
        </div>
        <div className='flex flex-col gap-2 md:gap-6 mt-[15%] md:mt-[5%]'>
            <Button color='#FF0000' onClick={()=> setCarColor(CarR,red)}/>
            <Button color='#FFC700' onClick={()=>setCarColor(CarY,yellow) }/>
            <Button color='#0400B2' onClick={()=> setCarColor(CarB,blue)}/>
           
        </div>

    </main>
  )
}

export default Car