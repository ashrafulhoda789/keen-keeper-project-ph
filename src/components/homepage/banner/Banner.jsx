import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='my-10 w-9/12 mx-auto'>
            <div className='text-center space-y-4'>
                <h1 className='text-3xl md:text-5xl font-bold'>Friends to keep close in your life</h1>
                <p className='text-[16px] text-gray-500'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br></br> relationships that matter most.</p>
                <button className='btn bg-green-800 text-white'><FaPlus></FaPlus> Add a Friend</button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10'>
                <div className='text-center shadow-xl shadow-gray-200 p-7'>
                    <h3 className='text-xl text-green-300 md:text-3xl'>10</h3>
                    <h4 className='text-lg text-gray-500'>Total Friends</h4>
                </div>
                <div className='text-center shadow-xl shadow-gray-200 p-7'>
                    <h3 className='text-xl text-green-300 md:text-3xl'>3</h3>
                    <h4 className='text-lg text-gray-500'>On Track</h4>
                </div>
                <div className='text-center shadow-xl shadow-gray-200 p-7'>
                    <h3 className='text-xl text-green-300 md:text-3xl'>6</h3>
                    <h4 className='text-lg text-gray-500'>Need Attention</h4>
                </div>
                <div className='text-center shadow-xl shadow-gray-200 p-7'>
                    <h3 className='text-xl text-green-300 md:text-3xl'>12</h3>
                    <h4 className='text-lg text-gray-500'>Interaction This Month</h4>
                </div>
            </div>
        </div>
    );
};

export default Banner;