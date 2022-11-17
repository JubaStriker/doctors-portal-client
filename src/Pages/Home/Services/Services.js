import React from 'react';
import cavity from '../../../assets/images/cavity.png';
import fluoride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png';


const Services = () => {
    return (
        <div>
            <h1 className='text-primary text-xl text-center'>OUR SERVICES</h1>
            <h1 className='text-4xl text-center mb-20'>Services we provide</h1>

            <div className='flex flex-col lg:flex-row justify-center items-center gap-4'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={fluoride} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Fluoride Treatment</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={cavity} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cavity Filling</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={whitening} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Teeth Whitening</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;