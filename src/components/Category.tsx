import {categories} from '../data'


const Category = () => {
  return (
    <section id='reviews' className='px-4 py-24 bg-background'>
        <div className="container mx-auto max-w-7xl text-center flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-2 mt-8">
                <span className="text-purple text-lg tracking-widest">WHY THIS BOOK</span>
            <div className='h-1 w-21 bg-primary-gradient'></div>
            </div>
            <h2 className="text-4xl lg:text-5xl mt-3">
                Your next favorite read awaits
            </h2>
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-13">
                {categories.map((category, index)=>(
                    <div key={index}className=" group flex flex-col gap-4 px-8 py-9 border-2 rounded-2xl border-purple-200  text-start hover:shadow-2xl hover:border-purple hover:bg-purple-300/20 transition-all duration-300">
                        <div className='bg-primary-gradient w-fit rounded-[14px] p-[14px] group-hover:scale-115  transition-transform duration-300'>
                            <category.icon className='h-7 w-7 text-white'/>
                        </div>
                        <div className="flex flex-col gap-3">
                        <span className='text-xl'>{category.header}</span>
                        <p className=" text-muted-foreground">{category.text}</p>
                        </div>

                    </div>
                ))}

            </div>


        </div>

    </section>
  )
}

export default Category