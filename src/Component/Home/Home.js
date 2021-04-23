import React from 'react';
import CheckOut from '../CheckOut/CheckOut';
import Customer from '../Customer/Customer';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Providers from '../Providers/Providers';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <Providers></Providers>
            <Customer></Customer>
            <CheckOut></CheckOut>
            <Footer></Footer>
        </div>
    );
};

export default Home;