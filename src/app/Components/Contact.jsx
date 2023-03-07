import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/Bs'
import { TfiWorld } from 'react-icons/tfi'

const Contact = () => {
  return (
    <section className='container mx-auto py-10 px-4'>
     <div className='w-full lg:h-screen p-2'>
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
      <p className='text-xl tracking-widest uppercase text-[#055D9A]'>Our Contact</p>
      <h2 className='pt-4 pb-10'>Contact Us On</h2>
    
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2">Kantor Pusat</h2>
            <p className="text-gray-700 leading-relaxed">
            Jl. Cibogo No 39 Kel. Sukawarna, Kec. Sukajadi 
              <br />
              Kota Bandung
            </p>
            
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Kantor Operasional</h2>
            <p className="text-gray-700 leading-relaxed">
            Jl. Kramat Batu Dalam No. 27
            Kel. Gandaria Selatan, Kec. Cilandak,
            
              <br />
            Jakarta Selatan 
            </p>
          </div>
          {/* <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2">Kontak</h2>
            <ul className="list-disc list-inside">
              <li className="text-gray-700 leading-relaxed">Telepon: (022) 2015322</li>
              <li className="text-gray-700 leading-relaxed">Website : temadigi.id</li>
            </ul>
          </div> */}
        </div>
                    <div className='flex items-center justify-between m-auto'>

                        <div className='flex gap-4 items-center font-medium'>
                            <BsFillTelephoneFill className='text-[#055D9A] text-[22px]' />
                            (022) 2015322
                        </div>
                        <div className='flex gap-4 items-center font-medium'>
                            <AiOutlineMail className='text-[#055D9A] text-[22px]' />
                            email: temadigi.gmail.com
                        </div>

                        <div className='flex gap-4 items-center font-medium'>
                            <TfiWorld className='text-[#055D9A] text-[22px]' />
                            Website : temadigi.id
                        </div>

                    </div>
        {/* <div className='flex items-center justify-between m-auto'>
          <div>
            <BsFillTelephoneFill />
            (022) 2015322
         
          </div>
         <div>  
            <AiOutlineMail />
            email: temadigi.gmail.com
        
         </div>
          <div>
            <TfiWorld />
            Website : temadigi.id
          
          </div>
        </div> */}
        <div className="my-8">
          <h2 className="text-xl font-bold mb-2">Formulir Kontak</h2>
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="nama" className="block font-medium text-gray-700 mb-2">Nama</label>
                <input type="text" id="nama" name="nama" className="w-full border-gray-400 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" required />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium text-gray-700 mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full border-gray-400 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" required />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="pesan" className="block font-medium text-gray-700 mb-2">Pesan</label>
              <textarea id="pesan" name="pesan" rows="5" className="w-full border-gray-400 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" required></textarea>
            </div>

            <div className="mt-4">
              <button type="submit" className="py-2 px-4 bg-indigo-500 text-white rounded-lg shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Kirim</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Contact