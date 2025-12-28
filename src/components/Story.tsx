import { BookOpen, Heart, Quote, Sparkles } from 'lucide-react'
import { cn } from '../lib/utils'

const Story = () => {
    const tags=[
        {label:"Epic Tale", icon:BookOpen},
        {label:"Emotional", icon:Heart},
        {label:"Magical", icon:Sparkles},
    ]
  return (
    <section id='story' className=' px-4 py-24'>
        <div className='container grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl text-start'>
            <div className='flex flex-col space-y-6'>
                <div>
                    <span className='border-2 w-fit font-semibold bg-primary-gradient bg-clip-text text-transparent'>THE STORY</span>
                    <div className='h-1 w-21 bg-primary-gradient'></div>
                </div>
                <h2 className='text-foreground text-4xl lg:text-5xl leading-tight tracking-tight'>
                    Where forgotten dreams take root
                </h2>
                <div className='space-y-6 text-md md:text-lg text-muted-foreground leading-relaxed'>
                    <p >
                    In the heart of a forgotten city lies a garden that only appears at midnight. 
                    Those who find it are granted one night to walk among flowers that hold their deepest memories, their lost loves,
                     and their abandoned dreams.
                </p>
                <p>
                    When Emma discovers the garden after a devastating loss, she embarks on a mystical journey through her past.
                     Each bloom whispers secrets, each path reveals truths she has long buried. But the garden has rules, 
                    and breaking them could mean losing herself forever.
                </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
                    {tags.map((tag, index)=>(
                        <div className={cn('p-4 rounded-lg border-2 border-purple-600/30 flex flex-col items-center md:items-start ',
                            'hover:border-purple-600 hover:bg-purple-300/20 transition-all duration-300 cursor-pointer'
                        )}
                         key={index}>
                            <tag.icon className='h-6 w-6 text-purple mb-2'/>
                            <span className='text-foreground font-semibold'>{tag.label}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='relative flex items-center'>
                <img src="images/flower.jpeg" alt="" className='rounded-lg shadow-2xl'/>
                <div className='bg-background absolute w-[250px] md:w-full md:max-w-80 -bottom-6 -left-6 shadow-xl border border-secondary p-4 md:p-6 rounded-xl space-y-3'>
                    <Quote className='h-4 w-4 md:h-10 md:w-10 text-purple'/>
                    <i>"A masterpiece that will haunt you long after the last page"</i>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Story