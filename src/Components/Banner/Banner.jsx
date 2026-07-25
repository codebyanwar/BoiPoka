import React from 'react';
import heroImage from '../../assets/book.png'

const Banner = () => {
    return (
        <div className='bg-white'>
            <div className='bg-[#D8D8D8] lg:rounded-3xl rounded-xl lg:w-7xl lg:mx-auto lg:py-20 lg:px-30 lg:my-10 flex lg:justify-between lg:flex-row flex-col items-center mx-[2%] py-15 px-10'>
                <div className='lg:w-150 order-2 lg:order-1 text-center lg:text-left'>
                    <h1 className='text-[38px] lg:text-[56px] font-bold text-[#131313] lg:mb-10 mb-6 text-center lg:text-start'>Books to freshen up your bookshelf</h1>
                    <a className="btn bg-[#23BE0A] border-0 text-white shadow-none lg:text-[20px] text-[14px] font-bold lg:py-7 py-5 lg:px-8 px-6">View The List</a>
                </div>
                <div className='order-1 lg:order-2'>
                    <img className='w-50 lg:w-auto mb-7.5 lg:mb-0' src={heroImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;