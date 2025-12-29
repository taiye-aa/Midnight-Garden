import { Moon, Sun } from 'lucide-react';
import {useState, useEffect} from 'react';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(()=>{
        const storedTheme= localStorage.getItem('theme')
        if(storedTheme=== 'dark'){
            document.documentElement.classList.add('dark')
            setIsDarkMode(true)
        }else{
            document.documentElement.classList.remove('dark')        
            setIsDarkMode(false)
        }
    },[])

    const toggleTheme=()=>{
        if(isDarkMode){
            document.documentElement.classList.remove('dark')
            setIsDarkMode(false)
            localStorage.setItem('theme', 'light')
        }else{
            document.documentElement.classList.add('dark')
            setIsDarkMode(true)
            localStorage.setItem('theme', 'dark')
        }
    }
  return (
    <button onClick={toggleTheme} className='cursor-pointer'>
        {isDarkMode? <Sun className="h-5 w-5 text-yellow-400"/> :<Moon className="h-5 w-5 text-blue-900"/>}
    </button>
  )
}

export default ThemeToggle