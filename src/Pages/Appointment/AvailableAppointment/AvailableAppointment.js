import React from 'react';
import { format } from 'date-fns';

const AvailableAppointment = ({ selectedDate }) => {
    return (
        <div>
            <h1 className='text-center text-primary font-semibold text-lg'>
                Available Appointments on {format(selectedDate, 'PP')}
            </h1>
        </div>
    );
};

export default AvailableAppointment;