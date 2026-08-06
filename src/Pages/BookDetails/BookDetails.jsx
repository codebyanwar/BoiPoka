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
                    <img className='lg:h-100 w-auto' src={image} alt={bookName} />
                </div>
                <div>
                    <h2 className='text-[40px] font-bold text-[#131313]'>{bookName}</h2>
                    <p className='text-[18px] text-[#424242] font-semibold pt-1 pb-3 border-b border-[#DCDCDC]'>by: {author}</p>
                    <p className='text-[18px] text-[#424242] font-semibold py-3 border-b border-[#DCDCDC]'>{category}</p>
                    <p className='text-[16px] py-3 leading-[1.8em] text-[#5A5A5A]'><b className='text-[#131313]'>Review:</b> {review}</p>
                    <p className='text-[16px] py-3 leading-[1.8em] text-[#5A5A5A]'><b className='text-[#131313] -mb-1.5'>Tag: </b>
                        <span>
                            {tags.map((tag, index) =><span className='px-3 pt-1 pb-1.25 bg-[#E8F7F4] mx-2 rounded-full text-[#23BE0A] font-semibold' key={index}>#{tag}</span>)}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;