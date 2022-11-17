import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }}>
            <div className="hero mt-56">
                <div className="flex items-center flex-col lg:flex-row">
                    <img src={doctor} alt='' className="hidden lg:block -mt-52 lg:w-1/2 rounded-lg" />
                    <div className='py-10 px-14'>
                        <h1 className='text-primary text-lg font-bold'>Appointment</h1>
                        <h1 className="text-white text-3xl font-bold">Make an appointment Today</h1>
                        <p className="text-white py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn text-black bg-gradient-to-r from-primary to-secondary border-0
                        hover:text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;