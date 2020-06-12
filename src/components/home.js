import React from 'react';
import NavBar from './nav';
import elephants from '../images/elephants_gray.png';
import michelle from '../images/michelle_white.png';
import logo from '../images/logo.png'

const Home = props => {
    return (
        <div className='homeDiv'>
            <h4>Web Developer & Designer</h4>
            <img className='logo' src={logo} alt='logo'/>
            {/* <img className='elephantImg' src={elephants} alt='3 Elephants'/>
            <img className='michelle' src={michelle} alt='Michelle Sirimanivong' /> */}
           <NavBar />
        </div>
    )
}

export default Home;