import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {

    const {id} = useParams();
    const bookId = parseInt(id);
    
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const {bookName, author, image, review, totalPages, rating, category, publisher, yearOfPublishing} = singleBook;

    return (
        <div className='bg-white'>
            <div className='lg:w-7xl mx-auto lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 px-[2%] lg:px-0 items-center'>
                <div className='bg-[#f3f3f3] py-20 rounded-lg flex justify-center items-center'>
                    <img className='lg:h-100 w-auto' src={image} alt={bookName} />
                </div>
                <div>
                    <h2>{bookName}</h2>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;