import React from 'react';
import NavBar from './nav';

const Contact = props => {
    return (
        <section id='contact'>
            <div className='titleDiv'>
                <h1 className='title'>Contact</h1>
                <NavBar />
            </div>
            <div className='contactInfo'>
                <div>
                    <h2>Let's build something together!</h2>
                    <p>If you'd like to collaborate on a project, feel free to contact me.</p>
                </div>
                <div className='iconLinks'>
                    <a href='mailto:mlazzell17@gmail.com'><i className="fas fa-envelope-open-text"></i></a>
                    <a href='https://www.linkedin.com/in/michellesirimanivong/' target='_blank'><i className="fab fa-linkedin"></i></a>
                    <a href='https://twitter.com/msirimanivong' target='_blank'><i className="fab fa-twitter"></i></a>                
                </div>
            </div>

        </section>
    )
}

export default Contact;