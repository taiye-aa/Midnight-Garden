import { ArrowRight, ShoppingBag, Sparkles } from 'lucide-react'
import Stars from './Stars'

const Hero = () => {
    const stats=[
        {label:"Pages", value:"512"},
        {label:"Languages", value:"32"},
        {label:"Bestseller", value:"#1"}
    ]
  return (
    <section id='hero' className='relative min-h-screen pt-32 pb-20 px-6 overflow-hidden'>
        <div className='container grid grid-cols-1 gap-16 lg:gap-32 lg:grid-cols-2 max-w-7xl'>
            <div className='flex flex-col space-y-6 order-2 lg:order-1 text-start'>
                <div className=' flex gap-3 px-2 py-1 bg-primary-gradient text-background w-fit rounded-lg text-xs font-semibold'>
                   <Sparkles strokeWidth={0} className='h-4 w-4 fill-amber-400 '/><span >New York Times Bestseller</span>

                </div>
                <h1 className='text-6xl lg:text-7xl tracking-tight text-text-color leading-tight'>
                    The Midnight <span className='bg-primary-gradient bg-clip-text text-transparent'>Garden</span>
                </h1>
                <p className=' text-lg md:text-xl leading-relaxed max-w-lg text-muted-foreground'>
                    A spellbinding journey where memories bloom under moonlight and the boundaries between dreams and reality blur into magic.
                </p>
                <div className='flex gap-4 text-muted-foreground'>
                    <Stars size={23} classname={"fill-amber-400 text-amber-400"}/><span>4.9 · 2,847 readers</span>
                </div>
                <div className='flex space-x-4 mb-12 mt-4'>
                    <button className='text-md lg:text-lg px-3 py-1  bg-primary-gradient space-x-3 text-background rounded-lg font-semibold flex items-center justify-center hover:opacity-80 transition-all duration-300 gap-2 cursor-pointer'>
                        <ShoppingBag className='h-4 w-4'/> <span>Buy Now - $24.99</span>
                    </button>
                    <button className='text-md lg:text-lg px-4 py-1 bg-secondary text-foreground rounded-lg border-2 border-gray-300 hover:border-purple transition-all duration-300  font-semibold flex items-center justify-center gap-2 cursor-pointer'>
                        <span>Preview</span> <ArrowRight className='h-4 w-4'/>
                    </button>
                </div>
                <div className='flex space-x-10'>
                    {stats.map((stat,index)=>(
                        <div key={index} className='flex flex-col  '>
                            <span className='bg-primary-gradient bg-clip-text text-transparent text-4xl mb-1'>{stat.value}</span>
                            <span className='text-muted-foreground'>{stat.label}</span>
                        </div>
                    ))}
                </div>

            </div>
            <div className='flex justify-end items-center w-full order-1 lg:order-2 '>
                <img src="images/hero-img.jpeg" alt="" className='rounded-2xl w-4xl max-w-md shadow-2xl ring-1 ring-slate-900/5 transform hover:scale-105 transition-transform duration-500'/>
            </div>

        </div>


    </section>
  )
}

export default Hero