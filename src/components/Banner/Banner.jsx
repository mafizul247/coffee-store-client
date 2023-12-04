import React from 'react';
import './Banner.css'
import cardLogo1 from './../../assets/images/icons/1.png'
import cardLogo2 from './../../assets/images/icons/2.png'
import cardLogo3 from './../../assets/images/icons/3.png'
import cardLogo4 from './../../assets/images/icons/4.png'

const Banner = () => {
    return (
        <>
            <div className='banner'>
                <div className='banner-content'>
                    <h2 className='banner-title'>Would you like a Cup of Delicious Coffee?</h2>
                    <p className='banner-dec'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className='btn banner-btn'>Learn More</button>
                </div>
            </div>
            {/* Banner Down */}
            <div className='banner-down'>
                <div className='banner-card'>
                    <img src={cardLogo1} alt="Logo" />
                    <h3 className='card-title'>Awesome Aroma</h3>
                    <p className=''>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='banner-card'>
                    <img src={cardLogo2} alt="Logo" />
                    <h3 className='card-title'>High Quality</h3>
                    <p className=''>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className='banner-card'>
                    <img src={cardLogo3} alt="Logo" />
                    <h3 className='card-title'>Pure Grades</h3>
                    <p className=''>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className='banner-card'>
                    <img src={cardLogo4} alt="Logo" />
                    <h3 className='card-title'>Proper Roasting</h3>
                    <p className=''>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </>
    );
};

export default Banner;