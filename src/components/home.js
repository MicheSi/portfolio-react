import React from 'react';
import NavBar from './nav';
import michelle from '../images/michelle.png';
import elephants from '../images/elephants_bg.png';

const Home = props => {
    return (
        <div className='homeDiv'>
            <img className='ms' src={michelle} alt='Michelle Sirimanivong' />
            <h4>Web Developer & Designer</h4>
            <img className='elephants' src={elephants} alt='elephants logo' />
           <NavBar />
        </div>
    )
}

export default Home;