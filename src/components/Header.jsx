import React, { useState } from 'react';
import logo from '../assets/logo.png'
import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'
import profile from '../assets/profile.jpg'
import useDarkMode from '../hooks/useDarkMode'
import {motion} from 'framer-motion'

function Header() {
    const [colorTheme , setTheme] = useDarkMode()
    const [darkSide, setDarkSide] = useState(
        colorTheme === 'light' ? true : false
    )

    const toggleDarkMode = () => {
        setTheme(colorTheme)
        setDarkSide((state)=> !state)
    }

    const transition = {
        type: 'spring',
        stiffness: 200,
        damping:10
    }
    return (
        <div>
            {/* Header */}
            <header className='lg:hidden h-[80px] z-50 duration-300 ease-in-out p-4 dark:bg-[#1e2139] bg-[#373b53] flex items-center justify-end'>
                {/* Logo Image */}
                <img src={logo} alt="logo-image" className='h-[80px] absolute left-0' />
                
                {/* Right side */}
                <div className='flex items-center'>

                    {/* DarkMode Button */}
                    {
                        colorTheme === 'light' ?
                            <motion.img 
                                initial={{
                                    scale: 0.6, rotate: 90
                                }}
                                animate={{
                                    scale: 1,
                                    rotate: 360,
                                    transition
                                }}
                                whileTap={{
                                    scale: 0.9, rotate :15
                                }}
                                onClick={toggleDarkMode}
                                src={moon}
                                className=' cursor-pointer ml-8 h-10' />
                            :
                            <motion.img
                                initial={{
                                    rotate: 45
                                }}
                                animate={{
                                    scale: 1,
                                    rotate: 360,
                                    transition
                                }}
                                whileTap={{
                                    scale: 0.9, rotate :15
                                }}
                                onClick={toggleDarkMode}
                                src={sun}
                                className=' cursor-pointer ml-8 h-10' />
                    }

                    {/* Dotted Line */}
                    <div className='h-[80px] border-dotted border-l border-[#494e6e] mx-6'>
                    </div>

                    {/* Profile */}
                    <div className='relative'>
                        <img src={profile} alt="profile" className='rounded-full h-[50px]' />
                    </div>
                </div>
            </header>
            {/* Sidebar */}
            <div className='z-50 hidden lg:block'>
                <div className=' fixed z-50 w-[100px] rounded-r-3xl flex-col h-screen dark:bg-[#1e2139] bg-[#373b53]'>
                    <div className=' h-full w-full flex flex-col justify-between items-center'>
                        {/* Logo */}
                        <img src={logo} alt="logo-image" className='relative h-[80px]' />
                        
                        {/* Bottom side */}
                        <div>
                        
                            {
                            colorTheme === 'light' ?
                            <motion.img
                                initial={{
                                    scale: 0.6, rotate: 90
                                }}
                                animate={{
                                    scale: 1,
                                    rotate: 360,
                                    transition
                                }}
                                whileTap={{
                                    scale: 0.9, rotate :15
                                }}
                                onClick={toggleDarkMode}
                                src={moon}
                                className=' cursor-pointer ml-6 h-10' />
                            :
                            <motion.img
                                initial={{
                                    rotate: 45
                                }}
                                animate={{
                                    scale: 1,
                                    rotate: 360,
                                    transition
                                }}
                                whileTap={{
                                    scale: 0.9, rotate :15
                                }}
                                onClick={toggleDarkMode}
                                src={sun}
                                className=' cursor-pointer ml-6 h-10' />
                            }
                            
                            {/* Dotted Line */}
                            <div className='w-[100px] border-dotted border-t border-[#494e6e] my-6 '>
                            </div>

                            {/* Profile */}
                            <div className='relative ml-4 mb-4'>
                                <img src={profile} alt="profile" className='h-[50px] rounded-full ' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
  )
}

export default Header