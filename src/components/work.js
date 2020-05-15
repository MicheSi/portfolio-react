import React from 'react';
import NavBar from './nav';
import work from '../images/work.png';
import ddt from '../images/ddt.png';
import gigapet from '../images/gigapet.png';
import farmfresh from '../images/farmfresh.png';
import amiibo from '../images/amiibo.png';

const Work = props => {
    return (
        <section id='work'>
            <div className='titleDiv'>
                <img className='titleImg' src={work} alt='Work' />
                <NavBar />
            </div>
            <div className='projectDiv'>
                <div className='ddt'>
                    <a href='https://github.com/Lambda-School-Labs/sfmta-data-analysis-fe' target='_blank' rel='noopener noreferrer'><img src={ddt} alt='Data Driven Transit'/></a>
                </div>
                <div className='gigapet'>
                    <a href='https://github.com/build-gigapet-1/Frontend' target='_blank' rel='noopener noreferrer'><img src={gigapet} alt='Gigapets' /></a>
                </div>
                <div className='farmfresh'>
                    <a href='https://github.com/bw-farm-fresh-produce-v3/Frontend' target='_blank' rel='noopener noreferrer'><img src={farmfresh} alt='Farm Fresh Produce'/></a>
                </div>
                <div className='amiibo'>
                    <a href='https://github.com/MicheSi/amiibo' target='_blank' rel='noopener noreferrer'><img src={amiibo} alt='Amiibo'/></a>
                </div>
            </div>
        </section>
    )
}

export default Work;