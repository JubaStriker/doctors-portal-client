import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const InfoCards = () => {
    return (
        <div className='flex gap-5 flex-col items-center lg:flex-row max-w-6xl mx-auto justify-center px-5 my-20 py-10'>
            <div className="card text-white w-80 md:w-96 card-side bg-gradient-to-r from-primary to-secondary shadow-xl px-4 py-6">
                <figure><img src={clock} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Opening hours</h2>
                    <p>11:00 am to 10:00 pm</p>

                </div>
            </div>
            <div className="card card-side w-80 md:w-96 bg-neutral text-white shadow-xl px-4 py-3">
                <figure><img src={marker} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Visit our location</h2>
                    <p>Brooklyn, NY 10036, United States</p>

                </div>
            </div>
            <div className="card text-white w-80 md:w-96 card-side bg-gradient-to-r from-primary to-secondary shadow-xl px-4 py-6">
                <figure><img src={phone} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Contact us now</h2>
                    <p>+000 123 456789</p>

                </div>
            </div>
        </div>
    );
};

export default InfoCards;