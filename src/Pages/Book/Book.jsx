import React from 'react';
import { use } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';



const Book = ({singleBook}) => {

    // const booksData = use(booksPromise);
    // console.log(booksData);
    console.log(singleBook);

    const {bookName, author, image, review, totalPages, rating, category, publisher, yearOfPublishing} = singleBook;

    return (
        <div className="border border-solid border-[#DCDCDC] rounded-xl bg-white shadow-sm mx-[2%] md:mx-0">
        <figure className='px-5 py-10 m-5 mb-0 bg-[#F3F3F3] rounded-xl flex justify-center items-center'>
            <img className='h-62.5 w-auto'
                src={image}
                alt="Shoes" />
        </figure>
        <div className="card-actions justify-start px-5 pt-10 pb-0">
            <div className="badge badge-outline bg-[#F4FCF3] border-0 text-[#23BE0A] font-semibold rounded-full">{singleBook.tags[0]}</div>
            <div className="badge badge-outline bg-[#F4FCF3] border-0 text-[#23BE0A] font-semibold rounded-full">{singleBook.tags[1]}</div>
        </div>

        <div className="card-body pt-3">
            <h2 className="card-title">
                {bookName}
            </h2>

            <p className='border-b pb-5 border-dashed border-[#DCDCDC]'>By: {author}</p>

            <div className="card-actions justify-between pt-3">
                <div className="font-semibold">{category}</div>
                <div className="font-semibold">{rating}<span><i className="bi bi-star ml-3"></i></span></div>
            </div>
        </div>
        </div>
    );
};

export default Book;