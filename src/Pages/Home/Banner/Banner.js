import React, { useContext } from 'react';
import { ThemeContext } from '../../../Context/Theme/ThemeProvider';
import chair from '../../../assets/images/chair.png';
import chairbg from '../../../assets/images/bg.png';
const Banner = () => {

    const { toggleTheme } = useContext(ThemeContext)

    let theme = "doctortheme"

    if (toggleTheme) {
        theme = "doctortheme";
    }
    else {
        theme = "dark";
    }


    return (

        < div data-theme={`${theme}`} className='my-10' style={{
            background: `url(${chairbg})`
        }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="w-full lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">“I’m always amazed to hear of air crash victims so badly mutilated that they have to be identified by their dental records.  What I can’t understand is, if they don’t know who you are, how do they know who your dentist is?” ~ Paul Merton </p>
                        <button className="btn text-black bg-gradient-to-r from-primary to-secondary border-0
                        hover:text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;