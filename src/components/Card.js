import React from 'react';
import img1 from '../png1.png';
import img2 from '../pngwing.com.png';
import img3 from '../png3.png';
import img4 from '../png4.png'
const Card = () => {
  return (
    <>
       <div className='flex gap-2 bg-white rounded-xl w-[260px] h-[150px] justify-center items-center'>
          <div className='bg-green-300 w-24 h-24 rounded-[50%] flex justify-center items-center'><img src={img1} alt='img1' className=' w-16 h-16 '></img></div>
          <div>
            <p>Orders</p>
            <h4 className='text-2xl font-bold'><i>&#36;</i>198K</h4>
            <p><span className='text-green-700 text-lg font-semibold pr-1'>&#8593; 47.8%</span>this month</p>
          </div>
        </div>


        <div className='flex gap-2 bg-white rounded-xl w-[260px] h-[150px] justify-center items-center'>
          <div className='bg-sky-300 w-24 h-24 rounded-[50%] flex justify-center items-center'><img src={img2} alt='img1' className=' w-16 h-16 '></img></div>
          <div>
            <p>Orders</p>
            <h4 className='text-2xl font-bold'><i>&#36;</i>2.4K</h4>
            <p><span className='text-red-700 text-lg font-semibold pr-1'>&#8595; 2%</span>  this month</p>
          </div>
        </div>

        <div className='flex gap-2 bg-white rounded-xl w-[260px] h-[150px] justify-center items-center'>
          <div className='bg-purple-300 w-24 h-24 rounded-[50%] flex justify-center items-center'><img src={img3} alt='img1' className=' w-16 h-16 '></img></div>
          <div>
            <p>Balance</p>
            <h4 className='text-2xl font-bold'><i>&#36;</i>2.4K</h4>
            <p><span className='text-red-700 text-lg font-semibold pr-1'>&#8595; 2%</span>  this month</p>
          </div>
        </div>

        <div className='flex gap-2 bg-white rounded-xl w-[260px] h-[150px] justify-center items-center'>
          <div className='bg-pink-300 w-24 h-24 rounded-[50%] flex justify-center items-center'><img src={img4} alt='img1' className=' w-16 h-16 '></img></div>
          <div>
            <p>Total sale</p>
            <h4 className='text-2xl font-bold'><i>&#36;</i>89K</h4>
            <p><span className='text-green-700 text-lg font-semibold pr-1'>&#8593; 11%</span>  this week</p>
          </div>
        </div>
    </>
  )
}

export default Card