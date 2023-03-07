"use client"; // this is a client component
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Contact from './Components/Contact';
import Services from './Components/Services';
import Visi from './Components/Visi';
import Footer from './Components/Footer';
import Simpan from './Components/Simpan';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <body>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Visi />
      <Contact />
      <Footer />
      {/* <Simpan /> */}
    </body>
  )
}
