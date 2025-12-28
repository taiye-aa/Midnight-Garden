import { Star } from "lucide-react"

const Stars = ({size}:{size:number}) => {
  return (
    <div className="flex gap-1">
       <Star fill="gold" strokeWidth={0} className={`h-${size} w-${size}`}/>
       <Star fill="gold" strokeWidth={0} className={`h-${size} w-${size}`}/>
       <Star fill="gold" strokeWidth={0} className={`h-${size} w-${size}`}/>
       <Star fill="gold" strokeWidth={0} className={`h-${size} w-${size}`}/>
       <Star fill="gold" strokeWidth={0} className={`h-${size} w-${size}`}/>

    </div>
  )
}

export default Stars