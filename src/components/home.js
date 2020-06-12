import React from 'react';
import NavBar from './nav';
import logo from '../images/logo.png'

const Home = props => {
    return (
        <div className='homeDiv'>
            <h4>Web Developer & Designer</h4>
            <img className='logo' src={logo} alt='logo'/>
           <NavBar />
        </div>
    )
}

export default Home;