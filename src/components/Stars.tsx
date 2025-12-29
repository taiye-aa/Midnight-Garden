import { Star } from "lucide-react"

const Stars = ({size, classname}:{size:number, classname?:string}) => {
  return (
    <div className="flex ">
       <Star className={classname}  size={size}/>
       <Star className={classname}   size={size}/>
       <Star className={classname}   size={size}/>
       <Star className={classname}   size={size}/>
       <Star className={classname}   size={size}/>
    </div>
  )
}

export default Stars