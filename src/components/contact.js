import React from 'react';
import NavBar from './nav';
import contact from '../images/contact.png';

const Contact = props => {
    return (
        <section id='contact'>
            <div className='titleDiv contactDiv'>
                <img className='titleImg' src={contact} alt='Contact' />
                <NavBar />
            </div>
            <div className='contactInfo'>
                <div className='contactText'>
                    <h2>Let's build something together!</h2>
                    <p>If you'd like to collaborate on a project, please get in touch.</p>
                </div>
                <div className='iconLinks'>
                    <a href='mailto:mlazzell17@gmail.com'><i className="fas fa-envelope-open-text"></i></a>
                    <a href='https://www.linkedin.com/in/michellesirimanivong/' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin"></i></a>
                    <a href='https://github.com/MicheSi' target='_blank' rel='noopener noreferrer'><i className="fab fa-github"></i></a>
                    <a href='https://twitter.com/msirimanivong' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter"></i></a>                
                </div>
            </div>
        </section>
    )
}

export default Contact;