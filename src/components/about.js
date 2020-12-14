import React from 'react';
import NavBar from './nav';
import about from '../images/about.png';
import profile from '../images/new_profile.jpg';

const About = props => {
    return (
        <section id='about'>
            <div className='titleDiv aboutImgDiv'>
                <img className='titleImg' src={about} alt='About'/>
                <NavBar />
            </div>
            <div className='aboutDiv'>
                <img className='michelle' src={profile} alt='Michelle Sirimanivong'/>
                <h3>I am a web developer and designer from Arizona.</h3>
                <p>
                    My passion for design started in 2004 when I worked for a small stationery store. 
                    I was drawn to the aesthetically pleasing designs of the greeting cards and stationery. 
                    I began to create custom stationery and invitations for clients - turning a simple piece of paper into a beautiful work of art.
                </p>
                <p>
                    I graduated from Lambda School's Full Stack Web Development program in July 2020. I learned how to build functional and appealing
                    applications using HTML, CSS, JavaScript, React and Node.js. During our Computer Science unit, I learned how to build programs and write algorithms using Python. I am currently learning Java, via self-study, to continue growing my programming skills.
                </p>
                <h3 className='skillsh3'>Skills</h3>
                <p className='skills'>
                    HTML | CSS | JavaScript | React | Redux | Node | Python | SQL | SQLite |
                     Postgres | Express | Knex | Jest | React Testing Library | Java
                </p>
            </div>
        </section>
    )
}

export default About;