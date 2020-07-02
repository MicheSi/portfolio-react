import React from 'react';
import NavBar from './nav';
import about from '../images/about.png';

const About = props => {
    return (
        <section id='about'>
            <div className='titleDiv aboutImgDiv'>
                <img className='titleImg' src={about} alt='About'/>
                <NavBar />
            </div>
            <div className='aboutDiv'>
                <h3>I am a web developer and designer from Arizona.</h3>
                <p>
                    My passion for design started in 2004 when I worked for a small stationary store. 
                    I was drawn to the aesthetically pleasing designs of the greeting cards and stationary. 
                    I began to create custom stationary and invitations for clients - turning a simple piece of paper into a beautiful work of art.
                </p>
                <p>
                    I attended the Full Stack Web Development program at Lambda School in September of 2019. I learned how to build functional and appealing
                    applications using HTML, CSS, Javascript, React and Node.js. I also learned how to build a program using Python during our Computer Science unit.
                </p>
            </div>
        </section>
    )
}

export default About;