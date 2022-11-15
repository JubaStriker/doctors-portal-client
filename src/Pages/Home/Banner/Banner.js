import React, { useContext } from 'react';
import { ThemeContext } from '../../../Context/Theme/ThemeProvider';
import chair from '../../../assets/images/chair.png';
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

        < div data-theme={`${theme}`} className='my-10'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="w-full lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn text-black bg-gradient-to-r from-primary to-secondary border-0
                        hover:text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;