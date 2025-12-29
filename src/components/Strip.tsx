import { Award, Heart, Sparkle, TrendingUp } from 'lucide-react'

const strip = () => {
    const stats=[
        {label:"Award Winning", icon:Award},
        {label:"100k+ Sold", icon:TrendingUp},
        {label:"Reader Favorite", icon:Heart},
        {label:"Limited Edition", icon:Sparkle},
    ]
  return (
    <div className='bg-text-color grid grid-cols-2 md:grid-cols-4 py-8 px-6 place-items-center gap-4'>
        {stats.map((stat, index)=>(
            <div className='flex space-x-3 items-center' key={index}>
                <stat.icon className='text-purple h-5 w-5'/>
                <span className='text-background lg:text-lg font-semibold'>{stat.label}</span>
            </div>
        ))}
    </div>
  )
  
}

export default strip