import React from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import abs from './abs.avif';
import sar from './sar.jpg'

const TableSection = () => {
    return (
        <div className='bg-white rounded-xl p-5 mx-7 mt-8'>
            <div className='flex flex-col md:flex-row gap-2 justify-between'>
                <p className='text-xl font-bold'>Product Sell</p>
                <div className='flex gap-4'>
                    <input placeholder='search' type='text' className='px-2 py-1 text-lg font-medium bg-slate-100 rounded-lg w-[150px] md:w-[200px]'></input>
                    <div className='bg-slate-100 px-2 py-1 flex text-md rounded-lg'>
                        Last 30 Days <span className='text-2xl'> <IoMdArrowDropdown /></span>
                    </div>
                </div>
            </div>

            <div className='mt-6 overflow-x-auto'>
                <table className='md:w-full w-[500px] mx-auto table-fixed border-collapse my-2 '>
                    <tr className='border-b-2'>
                        <th colSpan={6} className=' text-left'>Product Name</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Total Sales</th>
                    </tr>
                    <tr >
                        <td colSpan={6} className='py-4' >
                            <div className='flex gap-4'>
                                <div>
                                    <img src={abs} alt='img.' className='w-24 h-14 rounded-md object-cover'></img>
                                </div>
                                <div>
                                    <p className='font-bold'>Abstarct 3D</p>
                                    <p>lorem impsum desiudc soshydada shssss </p>
                                </div>
                            </div>
                        </td>
                        <td className='text-center'>30k in stock</td>
                        <td className='text-center'>40<i>&#36;</i></td>
                        <td className='text-center'>20</td>
                    </tr>
                    <tr  >
                        <td colSpan={6} >
                            <div className='flex gap-4'>
                                <div>
                                    <img src={sar} alt='img.' className='w-24 h-14 rounded-md object-cover'></img>
                                </div>
                                <div>
                                    <p className='font-bold'>Sarphens Illustration</p>
                                    <p>lorem impsum desiudc soshydada shssss </p>
                                </div>
                            </div>
                        </td>
                        <td className='text-center'>30k in stock</td>
                        <td className='text-center'>40<i>&#36;</i></td>
                        <td className='text-center'>20</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default TableSection