import React from 'react'

const Visi = () => {
  return (
    <section className='container mx-auto py-10 px-4'>
    <div className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'> 
      <p className='text-xl tracking-widest uppercase text-[#055D9A]'>Visi Misi</p>
      <h2 className='pt-4 pb-10 text-[#055D9A]'>What Will We Do</h2>
      
      {/* <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h2 className="text-xl text-[#055D9A] font-bold mb-2">Visi</h2>
          <p className="text-gray-700 leading-relaxed">
          Menjadi perusahaan layanan
          teknologi informasi dengan
          kualifikasi dan kompetensi
          internasional serta
          berorientasi bisnis secara
          profesional.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2 text-[#FDA100]">Misi</h2>
          <ul className="list-disc list-inside">
            <li className="text-gray-700 leading-relaxed">Mengembangkan industri teknologi informasi dengan orientasi memasyarakatkan penggunaan teknologi informasi serta berorientasi bisnis dan pelayanan yang profesional.</li>
            <li className="text-gray-700 leading-relaxed">Mengakomodasi potensi sumber daya manusia dan mengembangkan peluang bisnis dalam bidang teknologi informasi yang ada.   </li>
            <li className="text-gray-700 leading-relaxed">Memberikan kontribusi bagi perkembangan dan kemajuan teknologi informasi</li>
          </ul>
        </div>
      </div> */}

      <div className="flex flex-col lg:flex-row text-white  gap-4 py-5">
        <div className="bg-blue-800 p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Visi</h2>
          <p className="text-white leading-relaxed">
          Menjadi perusahaan layanan
          teknologi informasi dengan
          kualifikasi dan kompetensi
          internasional serta
          berorientasi bisnis secara
          profesional.
          </p>
        </div>
        <div className=" bg-orange-500 p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2 text-white">Misi</h2>
          <ul className="list-disc list-inside">
            <li className="text-white leading-relaxed">Mengembangkan industri teknologi informasi dengan orientasi memasyarakatkan penggunaan teknologi informasi serta berorientasi bisnis dan pelayanan yang profesional.</li>
            <li className="text-white leading-relaxed">Mengakomodasi potensi sumber daya manusia dan mengembangkan peluang bisnis dalam bidang teknologi informasi yang ada.   </li>
            <li className="text-white leading-relaxed">Memberikan kontribusi bagi perkembangan dan kemajuan teknologi informasi</li>
          </ul>
        </div>
      </div>
{/* 
      <div className="grid grid-cols-2 gap-4 py-5">
        <div className="bg-gray-100 p-4 rounded-lg shadow border-2 border-blue-800">
          <h2 className="text-xl font-bold mb-2  text-[#055D9A]">Visi</h2>
          <p className="text-gray-700 leading-relaxed">
          Menjadi perusahaan layanan
          teknologi informasi dengan
          kualifikasi dan kompetensi
          internasional serta
          berorientasi bisnis secara
          profesional.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow border-2 border-orange-500">
          <h2 className="text-xl font-bold mb-2 text-[#FDA100]">Misi</h2>
          <ul className="list-disc list-inside">
            <li className="text-gray-700 leading-relaxed">Mengembangkan industri teknologi informasi dengan orientasi memasyarakatkan penggunaan teknologi informasi serta berorientasi bisnis dan pelayanan yang profesional.</li>
            <li className="text-gray-700 leading-relaxed">Mengakomodasi potensi sumber daya manusia dan mengembangkan peluang bisnis dalam bidang teknologi informasi yang ada.   </li>
            <li className="text-gray-700 leading-relaxed">Memberikan kontribusi bagi perkembangan dan kemajuan teknologi informasi</li>
          </ul>
        </div>
      </div> */}
    </div>
    </div>
    </section>
  )
}

export default Visi