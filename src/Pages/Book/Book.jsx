import React from 'react';
import { use } from 'react';

const Book = ({singleBooks}) => {

    // const booksData = use(booksPromise);
    // console.log(booksData);
    console.log(singleBooks);

    return (
        <div>
            <h3>this is a single book</h3>
        </div>
    );
};

export default Book;