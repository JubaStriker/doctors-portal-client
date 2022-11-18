import React from 'react';

const AppointmentOption = ({ appointment, setTreatment }) => {

    const { name, slots } = appointment;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body text-center ">
                    <h2 className="card-title font-bold text-primary justify-center"> {name}</h2>
                    {slots.length > 0 ? <p>{slots[0]}</p> : 'Try another day'}
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available.</p>
                    <div className="card-actions justify-center">

                        <label disabled={slots.length === 0} htmlFor="booking-modal" className="btn text-white bg-gradient-to-r from-primary to-secondary border-0
                        hover:text-gray-200"
                            onClick={() => setTreatment(appointment)}>Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;