import React from 'react';
import { AiOutlineDashboard , AiOutlineCaretDown} from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { LuBadgePercent } from "react-icons/lu";
import { FiHelpCircle } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import {BiSolidRightArrow } from "react-icons/bi";
import avatar from '../avatar.png'


const Sidebar = ({isOpen}) => {
  
  return (
    <>

      <aside className={`${isOpen ? 'w-[60%] h-screen z-[100]'  : ' md:w-[17%] w-0 overflow-hidden'}   bg-blue-900 font-sans font-semibold fixed md:relative`}>
        <div className='text-white text-2xl flex gap-2 py-4 px-6'>
          <span className='text-3xl'><AiOutlineDashboard /></span>
          Dashboard
        </div>

        <ul className='text-slate-300 '>

          <li className=' flex gap-2 my-7 px-6 py-2 mx-2 cursor-pointer bg-slate-500 rounded-md  text-lg'><span className='text-2xl'><RxDashboard /> </span>Dashboard</li>
          <li className=' flex justify-between my-7 px-6 cursor-pointer hover:text-white   text-md'><span className='text-xl flex gap-2'><MdProductionQuantityLimits />Product</span>  <BiSolidRightArrow/></li>
          <li className=' flex justify-between my-7 px-6 cursor-pointer hover:text-white   text-md'><span className='text-xl flex gap-2'><IoMdContacts /> Customers </span><BiSolidRightArrow/></li>
          <li className=' flex justify-between my-7 px-6 cursor-pointer hover:text-white   text-md'><span className='text-xl flex gap-2'><BiSupport />Income</span>  <BiSolidRightArrow/></li>
          <li className=' flex justify-between my-7 px-6 cursor-pointer hover:text-white   text-md'><span className='text-xl flex gap-2'><LuBadgePercent />Promote</span>  <BiSolidRightArrow/></li>
          <li className=' flex justify-between my-7 px-6 cursor-pointer hover:text-white   text-md'><span className='text-xl flex gap-2'><FiHelpCircle />Help</span>  <BiSolidRightArrow/></li>

        </ul>

        <footer className=' flex justify-between mx-auto  p-2 absolute bottom-4 left-2 right-2 rounded-md bg-slate-500'>
          <div className='flex gap-2'>
             <div ><img src={avatar} alt='..img' className='w-12 h-12 rounded-[50%]'/></div>
             <div>
               <p className='text-white'>Evano</p>
               <p className='text-sm'>Product Manager</p>
             </div>
          </div>
          <span className='my-auto mr-2'><AiOutlineCaretDown/></span>
        </footer>

        
      </aside>
    </>
  )
}

export default Sidebar;