import React, { createContext} from 'react';
import { red } from '../utils/colorscheme';
export type colorType = string

interface colorContext {
  color:colorType,
  setColor: React.Dispatch<React.SetStateAction<colorType>>
}


const defaultValue:colorContext = {color:red,setColor:(color:React.SetStateAction<colorType>) => color }

const ColorContext = createContext<colorContext>(defaultValue);



export default ColorContext;