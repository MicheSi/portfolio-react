import React from 'react';
import NavBar from './nav';

const About = props => {
    return (
        <section className='about'>
            <div>
                <h1>About</h1>
                <NavBar />
            </div>
            <div>
                <h3>I am a web developer and designer from Arizona.</h3>
                <p></p>
            </div>

        </section>
    )
}

export default About;