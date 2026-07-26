import React, { Suspense, useEffect, useState } from 'react';
import { data } from 'react-router';
import Book from '../Book/Book';

const Books = ({boiData}) => {

    // const [allBooks, setAllBooks] = useState([]);

            // type 1
    // useEffect(()=>{
    //     fetch('booksData.json')
    //     .then(res =>res.json())
    //     .then(data =>{
    //         setAllBooks(data);
    //     })
    // },[])


        // type 2

    // const booksPromise = fetch('booksData.json')
    //     .then(res => res.json());

        // type 3
        
    // 1. go to routes file and set a loader
    // 2. then go to Home.jsx and use useLoaderData hook and sent the data as a props
    // 3. in the books.js recived the data and use is by using map



    return (
        <div className='bg-white'>
            <div className='lg:max-w-7xl mx-auto'>
                <h1 className='text-[38px] lg:text-[56px] font-bold text-[#131313] lg:mb-10 mb-6 text-center'>Books</h1>
                
                <Suspense fallback={<h3>Loading...</h3>}>
                    {boiData.map((singleBooks =><Book key={singleBooks.bookId} singleBooks={singleBooks}></Book>))}
                </Suspense>
            </div>
        </div>
    );
};

export default Books;