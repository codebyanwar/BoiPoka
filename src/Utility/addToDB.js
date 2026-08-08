const getStoredBooks = () => {
    const getStoredBookStr = localStorage.getItem('readList');

    if(getStoredBookStr){
        const storedBookData = JSON.parse(getStoredBookStr);
        return storedBookData;
    }else{
        return [];
    }
}


const addToStoredDB = (id)=>{

    const storedBookData = getStoredBooks();

    if(storedBookData.includes(id)){
        alert('This book is already in your read list');
    } else{
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem('readList', data);
    }
}


export {addToStoredDB,getStoredBooks};