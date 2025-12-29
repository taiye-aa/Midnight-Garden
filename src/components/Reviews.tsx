import Stars from "./Stars"
import {data} from '../data'


const Reviews = () => {
    
  return (
    <section id='reviews' className='px-4 py-24 bg-background'>
        <div className="container mx-auto max-w-7xl text-center flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-2">
                <span className="bg-primary-gradient bg-clip-text text-transparent text-xl">READER REVIEWS</span>
            <div className='h-1 w-21 bg-primary-gradient'></div>
            </div>
            <h2 className="text-4xl lg:text-5xl mt-6">
                Loved by Thousands of Readers Worldwide
            </h2>
            <div className="flex gap-1 items-center">
                <Stars size={34} classname={"fill-amber-400 text-amber-400"}/>
                <span className="text-2xl text-muted-foreground ml-2">
                    4.9 / 5.0
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-13">
                {data.map((review, index)=>(
                    <div key={index}className="flex flex-col gap-4 p-8 border-2 rounded-2xl border-purple-200  text-start hover:shadow-2xl hover:border-purple transition-all duration-300">
                        <Stars size={20} classname={"fill-amber-400 text-amber-400"}/>
                        <p className="text-lg text-muted-foreground">{review.text}</p>
                        <div className="flex flex-col">
                        <span>{review.name}</span>
                        <span className="text-muted-foreground">{review.occupation}</span>
                        </div>

                    </div>
                ))}

            </div>


        </div>

    </section>
  )
}

export default Reviews