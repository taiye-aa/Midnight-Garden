import { ArrowRight, Award, Star, Zap } from 'lucide-react'

const About = () => {
    const achivements=[
        {label:"National Book Award", icon:Award, color:"text-purple-800",bgColor:"bg-purple-300/50"},
        {label:"NY Times Bestseller", icon:Zap, color:"text-pink-800",bgColor:"bg-pink-300/50"},
        {label:"2M+ Readers", icon:Star, color:"text-blue-800",bgColor:"bg-blue-300/50"},
    ]
  return (
    <section className='px-4 py-24 bg-switch-background/20'>
        <div className='container grid grid-cols-1 lg:grid-cols-5 max-w-7xl gap-12'>
            <div className=' flex items-center lg:col-span-2 '>
                <div className='relative w-full'>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl transform rotate-3"></div>
                    <img src="images/statue.jpeg" alt=""  className='rounded-lg w-full h-[500px] object-cover shadow-2xl relative'/>
                </div>
            </div>
            <div className='lg:col-span-3 flex flex-col gap-5 text-start'>
                <div className=' flex flex-col space-y-2'>
                    <span className=' w-fit font-light text-xl text-purple'>MEET THE AUTHOR</span>
                    <div className='h-1 w-21 bg-primary-gradient'></div>
                </div>

                <h2 className='text-4xl lg:text-5xl'>
                    Sarah Chen
                </h2>
                <div className='flex gap-4'>
                    {achivements.map((item, index)=>(
                        <div className={`px-2 py-1 flex items-center rounded-lg gap-2 ${item.bgColor}`} key={index}>
                            <item.icon className={`h-3 w-3 ${item.color}`}/>
                            <span className={`${item.color} text-sm`}>{item.label}</span>
                        </div>
                    ))}
                </div>
                <div className='space-y-6 text-md md:text-lg text-muted-foreground leading-relaxed'>
                    <p>
                        Sarah Chen is a New York Times bestselling author celebrated for her lyrical prose and deeply emotional storytelling. 
                        Her novels have been translated into 32 languages and adapted for both film and television.
                    </p>
                    <p>
                        A recipient of the National Book Award and the PEN/Faulkner Award, Sarah draws inspiration from mythology, nature, and the complexities of human relationships. 
                        She lives in Portland, Oregon, where she spends her days writing, hiking, and tending to her own midnight garden.
                    </p>
                </div>
                <button className='group flex w-fit text-purple items-center p-2 gap-4 border-2 cursor-pointer border-purple rounded-lg hover:bg-purple hover:text-white transition-all duration-300'>
                    More About Sarah <ArrowRight className='text-purple group-hover:text-white transition-all duration-300 h-5 w-5'/></button>
            </div>
        </div>
    </section>
  )
}

export default About