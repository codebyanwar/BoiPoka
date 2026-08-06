import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {

    const {id} = useParams();
    const bookId = parseInt(id);
    
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const {bookName, author, image, review, totalPages, rating, category, publisher, yearOfPublishing, tags} = singleBook;

    return (
        <div className='bg-white'>
            <div className='lg:w-7xl mx-auto lg:py-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-10 px-[2%] lg:px-0 items-center'>
                <div className='bg-[#f3f3f3] py-20 rounded-lg flex justify-center items-center'>
                    <img className='lg:h-140 w-auto' src={image} alt={bookName} />
                </div>
                <div>
                    <h2 className='text-[40px] font-bold text-[#131313]'>{bookName}</h2>
                    <p className='text-[18px] text-[#424242] font-semibold pt-1 pb-3 border-b border-[#DCDCDC]'>by: {author}</p>
                    <p className='text-[18px] text-[#424242] font-semibold py-3 border-b border-[#DCDCDC]'>{category}</p>
                    <p className='text-[16px] py-3 leading-[1.8em] text-[#5A5A5A]'><b className='text-[#131313]'>Review:</b> {review}</p>
                    <p className='text-[16px] pt-3 pb-5 leading-[1.8em] text-[#5A5A5A] border-b border-[#dcdcdc] mb-3'><b className='text-[#131313] -mb-1.5'>Tag: </b>
                        <span>
                            {tags.map((tag, index) =><span className='px-3 pt-1 pb-1.25 bg-[#E8F7F4] mx-2 rounded-full text-[#23BE0A] font-semibold' key={index}>#{tag}</span>)}
                        </span>
                    </p>
                    <div className='grid grid-cols-2'>
                        <div>
                            <p className='text-[16px] py-1 leading-[1.8em] text-[#5A5A5A]'>Number of Pages:</p>
                            <p className='text-[16px] py-1 leading-[1.8em] text-[#5A5A5A]'>Publisher:</p>
                            <p className='text-[16px] py-1 leading-[1.8em] text-[#5A5A5A]'>Year of Publishing:</p>
                            <p className='text-[16px] py-1 leading-[1.8em] text-[#5A5A5A]'>Rating:</p>
                        </div>
                        <div>
                            <p className='text-[16px] py-1 leading-[1.8em] text-[#131313] font-bold'>{totalPages}</p>
                            <p className='text-[16px] py-1 leading-[1.8em] text-[#131313] font-bold'>{publisher}</p>
                            <p className='text-[16px] py-1 leading-[1.8em] text-[#131313] font-bold'>{yearOfPublishing}</p>
                            <p className='text-[16px] py-1 leading-[1.8em] text-[#131313] font-bold'>{rating}</p>
                        </div>
                    </div>
                    <div className='space-x-3'>
                        <button className='border border-[#B8B8B8] text-[#131313] px-5 py-2.5 rounded-lg mt-5 hover:text-white hover:bg-[#50B1C9] hover:border-[#50B1C9] font-semibold'>Read</button>
                        <button className='bg-[#50B1C9] border border-[#50B1C9] text-white px-5 py-2.5 rounded-lg mt-5 hover:bg-white hover:text-[#50B1C9] font-semibold'>Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;