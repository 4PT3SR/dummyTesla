
import Feature from "./feature"
const Footer = () => {
  return (
    <div className="mb-[30px] md:mb-0 relative h-16 flex items-center justify-center">
        <p className="h-[1px] border-collapse border-[1px] w-full md:w-1/2 "></p>

        <div className="flex absolute  justify-between w-full md:w-[40%] text-white">
          

          <Feature feature="Top Speed" value="800 MPH"/>
          <Feature feature="Power" value="800 HP"/>
          <Feature feature="Torque" value="120 N M"/>
          <Feature feature="Fuel Capacity" value="50 L"/>
          
        </div>
    </div>
  )
}

export default Footer