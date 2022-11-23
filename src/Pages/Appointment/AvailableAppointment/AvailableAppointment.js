import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';

const AvailableAppointment = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)
    const date = format(selectedDate, 'PP');

    const { data: appointmentOptions = [], refetch } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () =>
            fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
                .then(res => res.json())

    })

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])

    return (
        <div>
            <h1 className='text-center text-primary font-semibold text-lg'>
                Available Appointments on {format(selectedDate, 'PP')}
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto max-w-7xl my-16'>
                {appointmentOptions.map(appointment => <AppointmentOption key={appointment._id}
                    appointment={appointment}
                    setTreatment={setTreatment}></AppointmentOption>)}
            </div>
            {treatment &&
                <BookingModal treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                    refetch={refetch} />
            }
        </div>
    );
};

export default AvailableAppointment;