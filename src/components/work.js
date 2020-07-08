import React from 'react';
// component imports
import NavBar from './nav';

// image imports
import projects from '../images/projects.png';
import ddt from '../images/ddt.png';
import gigapet from '../images/gigapet.png';
import farmfresh from '../images/farmfresh.png';
import amiibo from '../images/amiibo.png';
import life from '../images/life.png';

const Work = props => {
    return (
        <section id='work'>
            <div className='titleDiv'>
                <img className='titleImg' src={projects} alt='Projects' />
                <NavBar />
            </div>
            <div className='projectDiv'>
                <div className='life'>
                    <a href='https://csbw-game-of-life.now.sh/' target='_blank' rel='noopener noreferrer'><img src={life} alt='Game of Life'/></a>
                    <a href='https://github.com/MicheSi/csbw-game-of-life' target='_blank' rel='noopener noreferrer'><h3>Conway's Game of Life</h3></a>
                    <p>A computer science classic from 1970, Game of Life simulates a cellular automaton.</p>
                    <p>▪ Built using React and styled with CSS</p>
                    <p>▪ Utilized Immer package to help manage application state</p>
                </div>
                <div className='ddt'>
                    <a href='https://datadriventransit.org/' target='_blank' rel='noopener noreferrer'><img src={ddt} alt='Data Driven Transit' /></a>
                    <a href='https://github.com/Lambda-School-Labs/sfmta-data-analysis-fe' target='_blank' rel='noopener noreferrer'><h3>Data Driven Transit</h3></a>
                    <p>Data Driven Transit is a React app that displays historical data on the San Francisco Municipal Transportation Agency.</p>
                    <p>▪ Collaborated on a team of 4 web developers, 3 data scientists and 1 UX designer to build the app in 8 weeks</p>
                    <p>▪ Solely responsible for creating the website logo and building the navigation bar</p>
                </div>
                <div className='gigapet'>
                    <a href='https://gigapet-1.now.sh/' target='_blank' rel='noopener noreferrer'><img src={gigapet} alt='Gigapets' /></a>
                    <a href='https://github.com/build-gigapet-1/Frontend' target='_blank' rel='noopener noreferrer'><h3>Gigapet</h3></a>
                    <p>Gigapet is a React app for parents to track their children's food intake and motivate kids to eat by feeding their gigapet.</p>
                    <p>▪ Collaborated on a team of 5 web developers to build the app in 1 week</p>
                    <p>▪ Built using React with Styled Components and Reactstrap for styling libraries</p>
                </div>
                <div className='farmfresh'>
                    <a href='https://farmfresh.now.sh/' target='_blank' rel='noopener noreferrer'><img src={farmfresh} alt='Farm Fresh Produce'/></a>
                    <a href='https://github.com/bw-farm-fresh-produce-v3/Frontend' target='_blank' rel='noopener noreferrer'><h3>Farm Fresh Produce</h3></a>
                    <p>Farm Fresh Produce is a React app that connects the public to local farmers, allowing them to buy fresh produce directly from the local farms.</p>
                    <p>▪ Collaborated on a team of 5 web developers to build the app in 1 week</p>
                    <p>▪ Built using React and Redux</p>
                </div>
                <div className='amiibo'>
                    <a href='https://amiibo.now.sh/' target='_blank' rel='noopener noreferrer'><img src={amiibo} alt='Amiibo'/></a>
                    <a href='https://github.com/MicheSi/amiibo' target='_blank' rel='noopener noreferrer'><h3>Amiibo</h3></a>
                    <p>Amiibo is a React app that allows users to look up images and information on Nintendo Amiibos.</p>
                    <p>▪ Utilized Amiibo API to generate data on Amiibos</p>
                    <p>▪ Built using React with Styled Components and Reactstrap for styling libraries</p>
                </div>
            </div>
        </section>
    )
}

export default Work;