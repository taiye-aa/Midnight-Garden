import {useEffect, useState} from 'react'
import ThemeToggle from './ThemeToggle'
import { Menu, ShoppingBag, XIcon } from 'lucide-react'
import {cn} from './../lib/utils'

type NavItem = {
    name:string
    href:string
}
const Navbar = () => {
    const navItems:NavItem[]=[
        {name:"Story",href:"#story"},
        {name:"Author",href:"#about"},
        {name:"Praise",href:"#reviews"}
    ]
    const [isMenuOpen, setIsMenuOpen]=useState<boolean>(false);
    const [navbar, setNavbar]=useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ():void=>{
        if(window.scrollY >= 88){
            setNavbar(true);
        }else{
            setNavbar(false);
        }})
    },[])
  return (
    <>
        <nav className={`fixed top-0 w-full transition-all duration-300 z-40 ${navbar && !isMenuOpen? 'bg-background/80 backdrop-blur-md shadow-md': 'bg-transparent'}`
        }
           
        >
            <div className='container flex justify-between items-center py-5'>
                <h1 className='text-xl z-100 sm:text-2xl bg-clip-text bg-primary-gradient text-transparent'>Midnight Garden</h1>
                <div className='hidden md:flex space-x-7  items-center'>
                    {navItems.map((item, index)=>(
                        <a href={item.href} key={index} className='text-md text-nav-color hover:text-purple transition-all duration-300'>
                            {item.name}</a>
                    ))}
                <button className='bg-primary-gradient px-3 py-2 shadow-lg text-sm rounded-lg text-background flex items-center space-x-4 cursor-pointer hover:scale-105 transition-transform duration-300'>
                    <ShoppingBag className='h-4 w-4'/> <span>Get Your Copy</span>
                </button>
                <ThemeToggle/>
                </div>

                <button className='md:hidden z-100' onClick={() => setIsMenuOpen(prev=>!prev)}
                    aria-label={isMenuOpen? "Close menu": "Open menu"}>
                    {isMenuOpen? <XIcon/> :<Menu/>}
                </button>
                    {/* {MobileMenu} */}
                <div className={cn('fixed top-0 left-0 right-0 h-1/2 bg-background/50 backdrop-blur-lg  justify-center items-center',
                    'md:hidden transition-all duration-300 px-8 py-6',
                    isMenuOpen? 'opacity-100 pointer-events-auto':'opacity-0 pointer-events-none'
                )} >
                    <div className={cn('bg-white w-full mt-10 rounded-lg shadow-lg flex flex-col items-center  justify-evenly p-6 dark:bg-gray-600',
                        
                    )}>
                        {navItems.map((item, index)=>(
                            <a href={item.href} key={index} className='block py-4 px-4 text-md w-full text-foreground hover:text-purple transition-all duration-300 hover'
                             onClick={()=> setIsMenuOpen(false)}>
                                {item.name}
                            </a>
                            
                        ))}
                        <button className='bg-primary-gradient px-2 py-1 text-md rounded-lg text-background flex items-center space-x-3 cursor-pointer hover:scale-105 transition-transform duration-300'>
                            <ShoppingBag className='h-3 w-3'/> <span>Get Your Copy</span>
                        </button>
                    </div>
                </div>
            </div>
            
        </nav>
        
    </>
  )
}

export default Navbar
