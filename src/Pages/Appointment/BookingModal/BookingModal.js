import { format } from 'date-fns/esm';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {

    const { name, slots } = treatment; // appointment options
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patientName: patientName,
            slot,
            email,
            phone
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking confirmed')
                    refetch();
                }
                else {
                    toast.error(data.message);
                }

            })

        console.log(booking);

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" value={date} disabled className="input input-bordered w-full  my-2" />
                        <select name='slot' className="select select-bordered w-full">

                            {slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)}
                        </select>
                        <input name='name' defaultValue={user?.displayName} disabled type="text" placeholder="Full name" className="input input-bordered w-full  my-2" />
                        <input name='phone' type="text" placeholder="Phone number" className="input input-bordered w-full  my-2" />
                        <input name='email' defaultValue={user?.email} disabled type="email" placeholder="Email" className="input input-bordered w-full  my-2" />
                        <input className='w-full btn btn-accent' type="submit" value="submit" />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;