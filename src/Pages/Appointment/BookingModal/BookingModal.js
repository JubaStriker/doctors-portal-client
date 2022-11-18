import { format } from 'date-fns/esm';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {

    const { name, slots } = treatment; // appointment options
    const date = format(selectedDate, 'PP');

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

        console.log(booking);
        setTreatment(null)
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
                        <input name='name' type="text" placeholder="Full name" className="input input-bordered w-full  my-2" />
                        <input name='phone' type="text" placeholder="Phone number" className="input input-bordered w-full  my-2" />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full  my-2" />
                        <input className='w-full btn btn-accent' type="submit" value="submit" />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;