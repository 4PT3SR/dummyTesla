
type featureProps = { 
    feature: string,
    value: string
}
const Feature = ({feature,value}:featureProps) => {
  return (
    <p className="flex flex-col items-center justify-center gap-2">
            <span className="font-extralight">{feature}</span><span className="h-[1px] border-[3px] rounded-full w-[px]"></span><span>{value}</span>
    </p>
  )
}

export default Feature