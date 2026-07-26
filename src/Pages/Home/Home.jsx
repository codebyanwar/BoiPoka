import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {

    const boiData = useLoaderData();

    console.log(boiData);

    return (
        <div>
            <Banner></Banner>
            <Books boiData={boiData}></Books>
        </div>
    );
};

export default Home;