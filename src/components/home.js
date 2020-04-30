import React from 'react';
import elephants from '../images/elephants.png'

const Home = props => {
    return (
        <div className='homeDiv'>
            <h4>Web & Design</h4>
            <img className='elephantImg' src={elephants} alt='3 Elephants'/>
            <nav>
                <a href='/'>About</a>|
                <a href='/'>Work</a>|
                <a href='/'>Contact</a>
            </nav>
        
        </div>
    )
}

export default Home;