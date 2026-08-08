import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Readlist from '../Readlist.jsx/Readlist';
import Wishlist from '../Wishlist/Wishlist';
import { useLoaderData } from 'react-router';
import { getStoredBooks } from '../../Utility/addToDB';
import { addToWishlist } from '../../Utility/addToDBInWishlist';

const ListedBooks = () => {

    const data = useLoaderData();
    const [myReadListBooks, setMyReadListBooks] = useState([]);
    const [myWishListBooks, setMyWishListBooks] = useState([]);

    useEffect(() => {
        const StoredReadListData = getStoredBooks();
        // const convertedStoredReadListData = StoredReadListData.map(id => parseInt(id));

        const myReadList = data.filter(book => StoredReadListData.includes(book.bookId));
        setMyReadListBooks(myReadList);
    },[]);

    useEffect(()=>{
        const storedWishlistData = addToWishlist();

        const myWishList = data.filter(book=> storedWishlistData.includes(book.bookId));
        setMyWishListBooks(myWishList);
    },[])

    return (
        <div className='bg-white'>
            <div className='mx-[2%] lg:w-7xl lg:mx-auto '>
                {/* Banner start */}

                <div className='bg-[#D8D8D8] lg:rounded-3xl rounded-xl lg:py-10 lg:px-30 lg:my-10 py-8 px-10 text-center'>
                    <h1 className='text-[38px] lg:text-[56px] font-bold text-[#131313]'>Books</h1>
                </div>

                {/* Banner end */}

                <div className='lg:py-15 py-8'>
                    <Tabs>
                        <TabList>
                            <Tab>Read Lists</Tab>
                            <Tab>Wishlist</Tab>
                        </TabList>

                        <TabPanel>
                            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 py-0 lg:py-10 px-0'>
                                {
                                    myReadListBooks.map((book)=> <Readlist key={book.bookId} book={book}></Readlist>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 py-0 lg:py-10 px-0'>
                                {
                                    myWishListBooks.map((book)=> <Wishlist key={book.bookId} book={book}></Wishlist>)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>

        </div>
    );
};

export default ListedBooks;