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
                    Aenean tincidunt at felis at commodo. Maecenas vitae metus venenatis, vehicula libero a, elementum sapien. 
                    Curabitur vitae ornare dui. Nunc bibendum euismod quam sit amet rutrum. Duis commodo quis ligula non elementum. 
                    Fusce egestas metus nec iaculis interdum. Nullam ultricies imperdiet ante, sit amet ullamcorper ipsum volutpat nec. 
                    Phasellus id metus varius, suscipit lacus sit amet, efficitur mauris. Donec a pulvinar dolor. Sed et arcu enim. 
                    Vestibulum efficitur consequat tincidunt. Suspendisse ut malesuada neque.
                </p>
            </div>
        </section>
    )
}

export default About;