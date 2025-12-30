import { Facebook, Instagram, Mail, TwitterIcon } from "lucide-react"
import Footer from "./Footer"

const NavBottom = () => {
    const socials=[
        {icon:<TwitterIcon/>, link:"#"},
        {icon:<Instagram/>, link:"#"},
        {icon:<Facebook/>, link:"#"},
        {icon:<Mail/>, link:"#"},
    ]
    const explore=[
        {text:"About the Book", href:"#"},
        {text:"Meet Sarah Chen", href:"#"},
        {text:"Reader Reviews", href:"#"},
        {text:"Read Sample", href:"#"},
    ]
    const support=[
        {text:"Contact Us", href:"#"},
        {text:"Shipping Info", href:"#"},
        {text:"Returns & Refunds", href:"#"},
        {text:"FAQs", href:"#"},
    ]
  return (
    <section id='footer' className=" py-6 bg-slate-900">
        <div className="container max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-11 lg:gap-4">
                <div className="col-span-2 flex flex-col gap-7">
                    <div className="text-start space-y-4 ">
                        <h3 className="text-purple text-2xl">
                            The Midnight Garden
                        </h3>
                        <p className="text-white/40">
                            A mesmerizing novel by Sarah Chen. Available worldwide in multiple formats and languages.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        {socials.map((item, index)=>(
                            <a key={index} className="rounded-full p-2 text-lg text-white/50 bg-slate-800 hover:bg-purple cursor-pointer" href={item.link}>{item.icon}</a>
                        ))}
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="text-start">
                        <span className="text-white text-[16px] font-bold">Explore</span>
                        <div className="flex flex-col gap-2 text-start mt-5">
                            {explore.map((item,index)=>(
                            <a href={item.href} key={index} className="text-white/40 text-[16px] hover:text-white mb-1">{item.text}</a>
                        ))}
                        </div>
                    </div>

                </div>
                <div className="col-span-1">
                    <div className="text-start">
                        <span className="text-white text-[16px] font-bold">Support</span>
                        <div className="flex flex-col gap-2 text-start mt-5">
                            {support.map((item,index)=>(
                            <a href={item.href} key={index} className="text-white/40 text-[16px] hover:text-white mb-1">{item.text}</a>
                        ))}
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <Footer/>

    </section>
  )
}

export default NavBottom