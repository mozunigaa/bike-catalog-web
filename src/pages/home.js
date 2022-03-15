import React from 'react';
import BikeList from '../components/bike/BikeList';
import Nav from '../components/shared/Navbar';

const Home = () => {
    return (
        <>
            <Nav />
            <BikeList/>
        </>
    )
}

export default Home