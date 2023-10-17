import React from 'react';

import ChartSection from './CharSection';
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBarsStaggered,} from "react-icons/fa6";
import { AiOutlineClose} from "react-icons/ai"
import DoughnutChart from './DougnutChart';
import TableSection from './TableSection';
import Card from './Card';
const Main = ({toggleFun, isOpen}) => {
  
  return (
    <main className='w-full md:w-[83%] bg-custom-white '>
      <header className='flex flex-col md:flex-row mt-4 md:mt-0 gap-4 md:justify-between items-center w-full h-[100px] px-8 '>
        <div className='text-2xl font-semibold flex relative '><div>Hello John  <span>&#128075;</span> </div><div className='absolute right-[-100px] top-1 md:hidden ' onClick={toggleFun}>{isOpen ? <AiOutlineClose/>:<FaBarsStaggered/>}</div></div>
        <div>
          <input placeholder='search' type='text' className='px-2 py-1 text-lg font-medium w-[300px]'></input>
        </div>
      </header>

      <section className='flex  md:flex-row md:justify-around mt-2 gap-4 md:gap-0 justify-center flex-wrap'>
        <Card/>
      </section>


      <section className='flex flex-col md:flex-row md:justify-between gap-4 md:gap-8 md:px-7 mt-8'>
        <div className='w-[95%] mx-[2.5%] md:mx-0 md:w-[60%] h-auto md:h-[400px] bg-white rounded-xl p-5 '>
          <div className='flex justify-between h-[10%] '>
            <div>
              <p className='font-bold text-lg'>Overview</p>
              <p>Monthly Income</p>
            </div>
            <div className='bg-slate-100 px-2 py-2 md:py-1 flex text-md rounded-xl'>
              Quantity <span className='text-2xl'> <IoMdArrowDropdown /></span>
            </div>
          </div>
          <div className='h-[90%] w-full '>
            <ChartSection />
          </div>
        </div>
        <div className='w-[95%] mx-[2.5%] md:mx-0 md:w-[30%] h-auto md:h-[400px] rounded-xl bg-white p-5'>
          <div>
            <p className='font-bold text-lg'>Customers</p>
            <p>Customer That Buy Product</p>
          </div>
          <DoughnutChart/>
        </div>
      </section>

      <TableSection/>
    </main>
  )
}

export default Main;