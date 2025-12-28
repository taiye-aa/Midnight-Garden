import { ArrowRight, ShoppingBag } from 'lucide-react'

const Hero = () => {
    const stats=[
        {label:"Pages", value:"512"},
        {label:"Languages", value:"32"},
        {label:"Bestseller", value:"#1"}
    ]
  return (
    <section id='hero' className='relative min-h-screen pt-32 pb-20 px-6 overflow-hidden'>
        <div className='container grid grid-cols-1 gap-16 lg:gap-32 lg:grid-cols-2 max-w-7xl'>
            <div className='flex flex-col space-y-10 order-2 lg:order-1 text-start'>
                <span className='px-2 py-1 bg-primary-gradient text-background w-fit rounded-lg text-xs font-semibold'>New York Times Bestseller</span>
                <h1 className='text-6xl lg:text-7xl tracking-tight leading-tight'>
                    The Midnight <span className='bg-primary-gradient bg-clip-text text-transparent'>Garden</span>
                </h1>
                <p className=' text-lg md:text-xl leading-relaxed max-w-lg text-muted-foreground'>
                    A spellbinding journey where memories bloom under moonlight and the boundaries between dreams and reality blur into magic.
                </p>
                <div className='flex space-x-8'>
                    <button className='text-md lg:text-xl px-4 py-2 bg-primary-gradient text-background rounded-lg font-semibold flex items-center justify-center hover:opacity-80 transition-all duration-300 gap-2 cursor-pointer'>
                        <ShoppingBag/> <span>Buy Now - $24.99</span>
                    </button>
                    <button className='text-md lg:text-xl px-4 py-2 bg-secondary text-foreground rounded-lg border-2 border-muted-foreground hover:border-purple transition-all duration-300  font-semibold flex items-center justify-center gap-2 cursor-pointer'>
                        <span>Preview</span> <ArrowRight/>
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
            <div className='flex justify-center items-center w-full order-1 lg:order-2 '>
                <img src="images/hero-img.jpeg" alt="" className='rounded-lg w-4xl max-w-md shadow-2xl ring-1 ring-slate-900/5 transform hover:scale-105 transition-transform duration-500'/>
            </div>

        </div>


    </section>
  )
}

export default Hero