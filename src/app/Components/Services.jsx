import React from 'react'
import {MdHomeRepairService,MdSecurity} from 'react-icons/Md'
import {AiOutlineCloudServer} from 'react-icons/ai'
import {BsTools} from 'react-icons/Bs'
import {BiBuildings} from 'react-icons/Bi'
import {TfiWorld} from 'react-icons/tfi'
import {MdSettingsVoice} from 'react-icons/md'
import {SiBmcsoftware} from 'react-icons/Si'

const Services = () => {
  return (
    <section id='service' className='container mx-auto py-10 px-4'>
    <div className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'> 
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Our Services</p>
        <h2 className='pt-4 pb-10'>What We Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 '>
          
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className=' m-auto'>
              <MdHomeRepairService size={70} color="#E47E1F"/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Internet Service Provider</h3>
                {/* <h5>Fiber optic | Wireless | VSAT</h5> */}
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className=' m-auto'>
              <AiOutlineCloudServer size={70} color="#1B9EFC"/>
              </div>
              <div className='flex flex-col'>
                <h3>Server</h3>
                {/* <h5>Cloud | Hosting | Domain</h5> */}
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className=' m-auto'>
              <BsTools size={60} color='DFA100'/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Manage Service</h3>
                {/* <h5>24/7 Support Service</h5> */}
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className=' m-auto'>
              <BiBuildings size={70} color='#52E03B'/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Smart Building</h3>
                {/* <h5>CCTV | Access Control | ETC</h5> */}
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className=' m-auto'>
              <TfiWorld size={70} color='488CD1'/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Web Service</h3>
                {/* <h5>Build & Maintenance</h5> */}
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className=' m-auto'>
              <MdSettingsVoice size={65} color='B90F0F'/>
              </div>
              <div className='flex flex-col'>
                <h3>Voice Over</h3>
                {/* <h5>Internet Protocol</h5> */}
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className=' m-auto'>
              <SiBmcsoftware size={65} color='B16FDA'/>
              </div>
              <div className='flex flex-col '>
                <h3>Software </h3>
                {/* <h5>App Development</h5> */}
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className=' m-auto'>
              <MdSecurity size={65} color='ED1B1B'/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Security Manages</h3>
                {/* <h5>Firewall</h5> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Services