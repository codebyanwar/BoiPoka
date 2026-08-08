import { getStoredBooks } from "./addToDB";

const addToWishlist = () =>{
    const getStoredWishlistStr = localStorage.getItem('wishlist');

    if(getStoredWishlistStr){
        const storedWishlistData = JSON.parse(getStoredWishlistStr);
        return storedWishlistData;
    }else{
        return [];
    }
}

const addToStoredWishlistDB = (id)=>{
    const storedWishlistData = addToWishlist();

    if(storedWishlistData.includes(id)){
        alert('This book is already in your wishlist');
    }else{

        if(getStoredBooks().includes(id)){
            alert('This book is already in your read list');
            return;
        }else{
        storedWishlistData.push(id);
        const data = JSON.stringify(storedWishlistData);
            localStorage.setItem('wishlist', data);
        }
    }
}

export {addToStoredWishlistDB, addToWishlist};