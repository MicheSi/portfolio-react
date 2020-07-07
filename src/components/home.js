import React from 'react';
import NavBar from './nav';
import logo from '../images/logo.png';
import michelle from '../images/michelle.png';
import elephants from '../images/elephants_bg.png';

const Home = props => {
    return (
        <div className='homeDiv'>
            <img className='ms' src={michelle}/>
            <h4>Web Developer & Designer</h4>
            <img className='elephants' src={elephants}/>
            {/* <img className='logo' src={logo} alt='logo'/> */}
           <NavBar />
        </div>
    )
}

export default Home;