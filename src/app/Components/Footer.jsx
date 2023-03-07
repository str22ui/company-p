import React from 'react'
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
      <div className="md:w-1/4 text-center md:text-left">
      <img src='logo.png' width='125' height='50'/>

      </div>
      <div className="md:w-1/4 text-center md:text-left">
        <h5 className="uppercase mb-2 text-white">Alamat</h5>
        <p className="text-gray-400">Jl. Kramat Batu Dalam No. 27
        Kel. Gandaria Selatan, Kec. Cilandak, Jakarta Selatan</p>
      </div>
      <div className="md:w-1/4 text-center md:text-left">
        <h5 className="uppercase mb-2 text-white">Telepon</h5>
        <p className="text-gray-400">(022) 2015322</p>
      </div>
      <div className="md:w-1/4 text-center md:text-left">
        <h5 className="uppercase mb-2 text-white">Follow Us</h5>
        <div className="flex mt-2">
          <a href="#" className="text-gray-400 hover:text-white"> <FaLinkedinIn /></a>
          <a href="#" className="ml-4 text-gray-400 hover:text-white"> <AiOutlineInstagram /></a>
          <a href="#" className="ml-4 text-gray-400 hover:text-white"> <AiOutlineMail /></a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer