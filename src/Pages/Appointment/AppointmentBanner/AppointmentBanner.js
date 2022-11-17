import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import chairbg from '../../../assets/images/bg.png'


const AppointmentBanner = ({ setSelectedDate, selectedDate }) => {


    return (
        <div className='py-10 my-16' style={{ background: `url(${chairbg})` }}>
            <div className="hero my-16">
                <div className="hero-content flex-col justify-evenly lg:flex-row-reverse">
                    <img src={chair} alt="chair" className="w-full lg:w-1/2  rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;