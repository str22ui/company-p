import React from 'react'

const About = () => {
  return (
    <section id='about' className='container mx-auto py-10 px-4'>
        <div className='w-full lg:h-screen p-2'>
        {/* <div id='about'className='w-full md:h-screen p-2 flex items-center '> */}
            <div className='max-w-[1240px] mx-auto  md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#055D9A]'>About</p>
                    <h2 className='py-4'>About Us</h2>
                    <p className='py-2 text-gray-600'>//We are not extraordinary company</p>
                    <p className='py-2 text-gray-600'>
                    PT. TEKNOLOGI MADANI UTAMA adalah perusahaan yang bergerak
                    dalam bidang Jasa Layanan Teknologi Informasi, dengan fokus
                    layanan antara lain : Penyedia jasa Internet Service Provider, OSP-FO,
                    Pembuatan Software Sistem Informasi, Web Site, Pelatihan Teknologi
                    Informasi dan Konsultan Teknologi Informasi. berdiri sejak tahun
                    2022 dengan berbagai segmen klien.
                    </p>
                    <p className='py-2 text-gray-600'>
                    PT. TEKNOLOGI MADANI UTAMA menawarkan pilihan kerja
                    sama yang optimal bagi klien dalam kebutuhan akan Layanan
                    Teknologi Informasi. Kami memberikan solusi dengan
                    penerapan teknologi-teknologi tepat guna, dan dijalankan
                    oleh tenagatenaga pelaksana kami yang telah
                    berpengalaman dan profesional di bidangnya.
                    </p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <img className='rounded-xl' src='building-1.jpg'/>
                </div>
            </div>
            {/* </div> */}
        </div>
    </section>
   
  )
}

export default About