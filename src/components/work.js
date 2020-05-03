import React from 'react';
import NavBar from './nav';
import ddt from '../images/ddt.png';
import gigapet from '../images/gigapet.png';
import farmfresh from '../images/farmfresh.png';

const Work = props => {
    return (
        <section id='work'>
            <div className='titleDiv'>
                <h1 className='title'>Work</h1>
                <NavBar />
            </div>
            <div className='projectDiv'>
                <div className='ddt'>
                    <img src={ddt} alt='Data Driven Transit' />
                </div>
                <div className='gigapet'>
                    <img src={gigapet} alt='Gigapets' />
                </div>
                <div className='farmfresh'>
                    <img src={farmfresh} alt='Farm Fresh Produce'/>
                </div>
            </div>
        </section>
    )
}

export default Work;