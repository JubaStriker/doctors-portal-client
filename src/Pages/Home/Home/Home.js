import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Banner />
            <InfoCards />
            <Services />
            <MakeAppointment />
            <Testimonial />
        </div>
    );
};

export default Home;