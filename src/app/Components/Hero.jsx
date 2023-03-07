import React from 'react'
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

const Hero = () => {
  return (
    <div id='hero' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            Let's Work Together
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, We Are <span className='text-[#055D9A]'>TEMA</span>
          </h1>
          {/* <h1 className='py-4 text-gray-700'>
          Information-Technology Company
          </h1> */}
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
          PT. TEKNOLOGI MADANI UTAMA adalah perusahaan yang bergerak
          dalam bidang Jasa Layanan Teknologi Informasi, dengan fokus
          layanan antara lain : Penyedia jasa Internet Service Provider, OSP-FO,
          Pembuatan Software Sistem Informasi, Web Site, Pelatihan Teknologi
          Informasi dan Konsultan Teknologi Informasi. berdiri sejak tahun
          2022 dengan berbagai segmen klien
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
              <FaLinkedinIn size={20} />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
              <AiOutlineInstagram size={25} />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
              <AiOutlineMail size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero