
interface buttonProps {
  color: string,
  onClick: () => void,
}
const Button = ({color,onClick}:buttonProps) => {
  return (
    <button className="w-[18px] h-[18px] md:w-[35px] md:h-[33px]" style={{backgroundColor:color}} onClick={onClick}></button>
  )
}

export default Button