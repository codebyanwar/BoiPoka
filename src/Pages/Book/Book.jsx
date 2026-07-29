import React from 'react';
import { use } from 'react';

const Book = ({singleBook}) => {

    // const booksData = use(booksPromise);
    // console.log(booksData);
    // console.log(singleBook);

    const {bookName, author, image, review, totalPages, rating, category, publisher, yearOfPublishing} = singleBook;

    return (
        <div className="card w-96 shadow-sm">
        <figure>
        <img
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
        <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>By: {author}</p>
        <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
        </div>
        </div>
        </div>
    );
};

export default Book;