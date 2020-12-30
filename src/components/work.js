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
import dream from '../images/dream.png';
import rise from '../images/rise.png';

const Work = props => {
    return (
        <section id='work'>
            <div className='titleDiv'>
                <img className='titleImg' src={projects} alt='Projects' />
                <NavBar />
            </div>
            <div className='projectDiv'>
                <div className='rise'>
                    <a href='https://riseorthosportspt.com' target='_blank' rel='noopener noreferrer'><img src={rise} alt='Rise Orthopedics and Sports Physical Therapy'/></a>
                    <h3>Rise Orthopedics & Sports Physical Therapy</h3>
                    <p>Website for Rise Orthopedics & Sports Physical Therapy in Surprise, AZ</p>
                    <li>Built using React, React Hooks and ReactStrap</li>
                    <li>Utilized Video-React as a web video player</li>
                    <li>Contact form connected to email using EmailJS</li>
                </div>
                <div className='links'>
                    <a href='https://riseorthosportspt.com' target='_blank' rel='noopener noreferrer'><i className="fas fa-external-link-alt"></i></a>
                    <a href='https://github.com/MicheSi/rise_pt' target='_blank' rel='noopener noreferrer'><i className="fab fa-github"></i></a>
                </div>
                <div className='border'></div>
                <div className='dream'>
                    <a href='https://my-dream-journal.vercel.app/' target='_blank' rel='noopener noreferrer'><img src={dream} alt='Dream Journal'/></a>
                    <h3>My Dream Journal</h3>
                    <p>My Dream Journal is a React app used to keep track of your dreams</p>
                    <li>Frontend built using React, Redux, React Hooks and Semantic UI React</li>
                    <li>Utilized Formik and Yup for schema validation</li>
                    <li>Backend API built with Node.js, Express, Knex and SQLite3, using Postgres for production</li>
                </div>
                <div className='links'>
                    <a href='https://my-dream-journal.vercel.app//' target='_blank' rel='noopener noreferrer'><i className="fas fa-external-link-alt"></i></a>
                    <a href='https://github.com/MicheSi/my_dream_journal' target='_blank' rel='noopener noreferrer'><i className="fab fa-github"></i></a>
                </div>
                <div className='border'></div>
                <div className='life'>
                    <a href='https://csbw-game-of-life.now.sh/' target='_blank' rel='noopener noreferrer'><img src={life} alt='Game of Life'/></a>
                    <h3>Conway's Game of Life</h3>
                    <p>A computer science classic from 1970, Game of Life simulates a cellular automaton</p>
                    <li>Built using React and styled with CSS</li>
                    <li>Utilized Immer package to help manage application state</li>
                </div>
                <div className='links'>
                    <a href='https://csbw-game-of-life.now.sh/' target='_blank' rel='noopener noreferrer'><i className="fas fa-external-link-alt"></i></a>
                    <a href='https://github.com/MicheSi/csbw-game-of-life' target='_blank' rel='noopener noreferrer'><i className="fab fa-github"></i></a>
                </div>
                <div className='border'></div>
                <div className='ddt'>
                    <a href='https://datadriventransit.vercel.app/' target='_blank' rel='noopener noreferrer'><img src={ddt} alt='Data Driven Transit' /></a>
                    <h3>Data Driven Transit</h3>
                    <p>Data Driven Transit is a React app that displays historical data on the San Francisco Municipal Transportation Agency</p>
                    <li>Collaborated on a team of 4 web developers, 3 data scientists and 1 UX designer to build the app in 8 weeks</li>
                    <li>Solely responsible for creating the website logo and building the navigation bar</li>
                </div>
                <div className='links'>
                    <a href='https://datadriventransit.vercel.app/' target='_blank' rel='noopener noreferrer'><i className="fas fa-external-link-alt"></i></a>
                    <a href='https://github.com/MicheSi/datadriventransit' target='_blank' rel='noopener noreferrer'><i className="fab fa-github"></i></a>
                </div>
                <div className='border'></div>
                <div className='gigapet'>
                    <a href='https://gigapet-1.now.sh/' target='_blank' rel='noopener noreferrer'><img src={gigapet} alt='Gigapets' /></a>
                    <h3>Gigapet</h3>
                    <p>Gigapet is a React app for parents to track their children's food intake and motivate kids to eat by feeding their gigapet</p>
                    <li>Collaborated on a team of 5 web developers to build the app in 1 week</li>
                    <li>Built using React with Styled Components and Reactstrap for styling libraries</li>
                    <li>Solely responsible for building the dashboard, meal cards and navigation menu</li>
                </div>
                <div className='links'>
                    <a href='https://gigapet-1.now.sh/' target='_blank' rel='noopener noreferrer'><i className="fas fa-external-link-alt"></i></a>
                    <a href='https://github.com/build-gigapet-1/Frontend' target='_blank' rel='noopener noreferrer'><i className="fab fa-github"></i></a>
                </div>
                <div className='border'></div>
                <div className='farmfresh'>
                    <a href='https://farmfresh.now.sh/' target='_blank' rel='noopener noreferrer'><img src={farmfresh} alt='Farm Fresh Produce'/></a>
                    <h3>Farm Fresh Produce</h3>
                    <p>Farm Fresh Produce is a React app that connects the public to local farmers, allowing them to buy fresh produce directly from the local farms</p>
                    <li>Collaborated on a team of 5 web developers to build the app in 1 week</li>
                    <li>Built using React and Redux</li>
                </div>
                <div className='links'>
                    <a href='https://farmfresh.now.sh/' target='_blank' rel='noopener noreferrer'><i className="fas fa-external-link-alt"></i></a>
                    <a href='https://github.com/bw-farm-fresh-produce-v3/Frontend' target='_blank' rel='noopener noreferrer'><i className="fab fa-github"></i></a>
                </div>
                {/* <div className='border'></div>
                <div className='amiibo'>
                    <a href='https://amiibo.now.sh/' target='_blank' rel='noopener noreferrer'><img src={amiibo} alt='Amiibo'/></a>
                    <h3>Amiibo</h3>
                    <p>Amiibo is a React app that allows users to look up images and information on Nintendo Amiibos</p>
                    <li>Utilized Amiibo API to generate data on Amiibos</li>
                    <li>Built using React with Styled Components and Reactstrap for styling libraries</li>
                </div>
                <div className='links'>
                    <a href='https://amiibo.now.sh/' target='_blank' rel='noopener noreferrer'><i className="fas fa-external-link-alt"></i></a>
                    <a href='https://github.com/MicheSi/amiibo' target='_blank' rel='noopener noreferrer'><i className="fab fa-github"></i></a>
                </div> */}
            </div>
        </section>
    )
}

export default Work;