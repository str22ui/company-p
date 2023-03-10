import Image from 'next/image'
import Link from 'next/link'
import React, {useState,useEffect} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg,setNavBg] = useState('#ecf0f3')


    const handleNav = () => {
        setNav(!nav)
        
    }

    useEffect(()=>{
        const handleShadow = () => {
            if(window.scrollY >= 90) {
                setShadow(true)
            }else{
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow);
    },[])

  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
        <div className='bg-white flex justify-between items-center w-full h-full px-4 2xl:px-16'>
            <img src='logo.png' width='125' height='50'/>

            <div>
                <ul className='hidden md:flex'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>

                    <Link href="#service">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Our Services</li>
                    </Link>

                    <Link href='#about'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>About Us</li>
                    </Link>

                    <Link href='/#contact'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Contact Us</li>
                    </Link>
                </ul>
                <div onClick={handleNav}className='md:hidden cursor-pointer'>
                    <AiOutlineMenu  size={25}/>
                </div>
            </div>
        </div>
        
        <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500' }>
            <div>
                <div className='flex w-full items-center justify-between'>
                    <img src='logo.png' width='87' height='35' alt='/' />
                    <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                        <AiOutlineClose />
                    </div>
                </div>
                <div className='border-b border-gray-300 my-4'>
                    <p className='w-[85%] md:w-[90%] py-4'
                    >Lorem ipsum dolor, sit amet consectetur.</p>
                </div>
            </div>
            <div className='py-4 flex flex-col'>
                <ul className='uppercase'>
                    <Link href='/'>
                        <li className='py-4 text-sm'>Home</li>
                    </Link>
                    <Link href='/'>
                        <li className='py-4 text-sm'>Our Services</li>
                    </Link>
                    <Link href='/'>
                        <li className='py-4 text-sm'>About Us</li>
                    </Link>
                    <Link href='/'>
                        <li className='py-4 text-sm'>Contact Us</li>
                    </Link>
                </ul>
                <div className='pt-80'>
                    <p className='uppercase tracking-widest text-[#5651e5]'>Ayo Bergabung</p>
                    <div className='flex items-center justify-between my-4 w-ful sm:w-[80%]'> 
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                            <FaLinkedinIn />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                            <FaLinkedinIn />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                            <FaLinkedinIn />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                            <FaLinkedinIn />
                        </div>
                    </div>
                </div>
            </div>
        
            </div>
        </div>
    </div>
  )
}

export default Navbar