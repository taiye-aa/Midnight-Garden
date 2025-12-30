import { ArrowRight, BookOpen, Quote } from 'lucide-react'

const Sample = () => {
  return (
    <section id='sample' className='overflow-hidden flex justify-center items-center flex-col min-h-screen px-24 bg-[url("/images/pooh.jpeg")] bg-cover bg-center'>
        <div className='bg-slate-900/90 h-screen w-screen flex flex-col justify-center items-center'>
        <BookOpen className='text-purple h-16 w-16 mt-10'/>
        <div className='max-w-2xl mt-6'>
            <h2 className='text-white text-4xl tracking-tight lg:text-5xl mb-6'>
                Experience the magic
            </h2>
            <p className='text-white/90 text-xl'>
                Dive into the first chapter and discover why readers around 
                the world are calling this an unforgettable masterpiece.
            </p>
        </div>
        <div>
            <div className='max-w-4xl text:lg w-md md:w-3xl lg:w-full md:text-xl text-white/90 leading-relaxed flex flex-col items-center bg-background/10 backdrop-blur-md border border-white/20 px-8 py-9 gap-4 rounded-2xl mt-8'>
                <Quote className='text-purple h-10 w-10'/>
                <i>"The garden appeared at the stroke of midnight, materializing from shadow and moonlight like a secret the city had kept for centuries. Emma stood at its gates, her heart pounding, 
                    knowing that once she stepped inside, nothing would ever be the same..."</i>
            </div>
        </div>
        <button className='group px-4 py-2 flex text-text-color items-center mt-8 bg-white rounded-lg font-medium text-lg gap-4 hover:bg-purple hover:text-white transition-all duration-300 cursor-pointer'>
            Read Sample Chapter <ArrowRight className='h-4 w-4'/>
        </button>

        </div>

    </section>
  )
}

export default Sample