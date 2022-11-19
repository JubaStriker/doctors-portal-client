import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import person1 from '../../../assets/images/people1.png'
import person2 from '../../../assets/images/people2.png'
import person3 from '../../../assets/images/people3.png'

const Testimonial = () => {
    return (
        <>
            <div className='my-20 flex justify-between px-10'>
                <div>
                    <h1 className='text-primary font-bold'>Testimonial</h1>
                    <h1 className='text-3xl font-medium'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-24 h-20 lg:w-48 lg:h-40' src={quote} alt="" />
                </div>
            </div>

            <div className='flex flex-col lg:flex-row gap-5 justify-center items-center'>
                <div className="card w- w-72 lg:w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    </div>
                    <div className='px-5 pb-3 flex gap-5 items-center'>
                        <figure><img className='border-4 border-primary rounded-full' src={person1} alt="Shoes" /></figure>
                        <div>
                            <h1>William Henry</h1>
                            <p>California</p>
                        </div>
                    </div>
                </div>
                <div className="card w-72 lg:w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    </div>
                    <div className='px-5 pb-3 flex gap-5 items-center'>
                        <figure><img className='border-4 border-primary rounded-full' src={person2} alt="Shoes" /></figure>
                        <div>
                            <h1>William Henry</h1>
                            <p>California</p>
                        </div>
                    </div>
                </div>
                <div className="card w-72 lg:w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    </div>
                    <div className='px-5 pb-3 flex gap-5 items-center'>
                        <figure><img className='border-4 border-primary rounded-full' src={person3} alt="Shoes" /></figure>
                        <div>
                            <h1>William Henry</h1>
                            <p>California</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;