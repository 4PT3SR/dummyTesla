import { useState } from 'react'
import Person from '../assets/person.svg'
import Search from '../assets/search.svg'
import Tesla from '../assets/teslaLogo.svg'
import {Icon} from '@iconify/react'
import clsx from 'clsx'
const Nav = () => {
  const [navOpen, setNavOpen] = useState<boolean>(true);
  const toggleNav = () => setNavOpen(!navOpen)
  return (

    <nav className="flex  justify-between md:justify-end gap-20 pt-4 md:pt-12 text-white md:items-start">
      <button className="md:hidden" onClick={toggleNav}>
        <Icon icon="cbi:tesla-trunk" width="21px" height="21px"  style={{color: 'white'}} />
      </button>
        <div className={clsx(" md:block absolute md:relative left-0 top-0 w-full h-full md:h-fit md:w-2/3 bg-black/90 md:bg-transparent z-40 ", navOpen && 'hidden') }>
        <ul className="  flex flex-col items-center md:items-start md:flex-row md:inline-flex md:justify-between w-full  ">
        {['Model S', 'Model 3', Tesla, 'Model X', 'Model Y'].map((nav, index) => {
          return nav.includes('Model')? <li key={index} className="cursor-pointer h-fit "  > {nav}</li> : <img key={index} src={nav} alt="tesla"  className='order-first md:order-none md:relative md:top-[-30px] w-[50px] h-[45px] md:h-[103px] md:w-[113px]'  />
        })}
        </ul>
        <button className="absolute md:hidden top-2 right-2" onClick={toggleNav}>
        <Icon icon="iconoir:cancel" width="21px" height="21px"  style={{color: 'white'}} />
      </button>
        </div>
        <ul className="inline-flex  h-[21px] gap-3 md:gap-7">
            {[Search, Person].map((icon, index)=> {
                return <img key={index} src={icon} alt={'kk'}  className='w-[15px] h-[15px] md:w-[21px] md:h-[21px] cursor-pointer' />
            })}
        </ul>
        {/* <img src={Tesla} alt="Tesla" height={103} width={113} className='relative top-[-20px]' /> */}
    </nav>
  )
}

export default Nav