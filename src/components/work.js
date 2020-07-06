import React, { useState } from 'react';
// component imports
import NavBar from './nav';
import HoverModal from './modal';
import projectData from './data';
// image imports
import work from '../images/work.png';
import ddt from '../images/ddt.png';
import gigapet from '../images/gigapet.png';
import farmfresh from '../images/farmfresh.png';
import amiibo from '../images/amiibo.png';
import life from '../images/life.png';

const Work = props => {
    const [modal, setModal] = useState(false)
    const [project, setProject] = useState(null)

    const toggle = () => setModal(!modal)

    const showModal = (data) => {
        console.log('data', data)
        let projectName = (data)

        projectData.map(project => {
            if(project.name === projectName){
                setProject(project)
                toggle()
            }
        })

    }

    return (
        <section id='work'>
            <div className='titleDiv'>
                <img className='titleImg' src={work} alt='Work' />
                <NavBar />
            </div>
            <div className='projectDiv'>
                {(modal && project) && <HoverModal project={project} modal={modal} toggle={toggle}/>}

                <div className='life'>
                    <a href='https://github.com/MicheSi/csbw-game-of-life' target='_blank' rel='noopener noreferrer'><img src={life} alt='Game of Life'/></a>
                    <h3>Conway's Game of Life</h3>
                    <p>A computer science classic from 1970, Game of Life simulates a cellular automaton.</p>
                    <p>▪ Built using React and styled with CSS</p>
                    <p>▪ Utilized Immer package to help manage application state</p>
                </div>
                <div className='ddt'>
                    <a href='https://github.com/Lambda-School-Labs/sfmta-data-analysis-fe' target='_blank' rel='noopener noreferrer'><img src={ddt} alt='Data Driven Transit' /></a>
                    <h3>Data Driven Transit</h3>
                    <p>Data Driven Transit is a React app that displays historical data on the San Francisco Municipal Transportation Agency.</p>
                    <p>▪ Collaborated on a team of 4 web developers, 3 data scientists and 1 UX designer to build the app in 8 weeks</p>
                    <p>▪ Solely responsible for creating the website logo and building the navigation bar</p>
                </div>
                <div className='gigapet'>
                    <a href='https://github.com/build-gigapet-1/Frontend' target='_blank' rel='noopener noreferrer'><img src={gigapet} alt='Gigapets' /></a>
                    <h3>Gigapet</h3>
                    <p>Gigapet is a React app for parents to track their children's food intake and motivate kids to eat by feeding their gigapet.</p>
                    <p>▪ Collaborated on a team of 5 web developers to build the app in 1 week</p>
                    <p>▪ Built using React with Styled Components and Reactstrap for styling libraries</p>
                </div>
                <div className='farmfresh'>
                    <a href='https://github.com/bw-farm-fresh-produce-v3/Frontend' target='_blank' rel='noopener noreferrer'><img src={farmfresh} alt='Farm Fresh Produce'/></a>
                    <h3>Farm Fresh Produce</h3>
                    <p>Farm Fresh Produce is a React app that connects the public to local farmers, allowing them to buy fresh produce directly from the local farms.</p>
                    <p>▪ Collaborated on a team of 5 web developers to build the app in 1 week</p>
                    <p>▪ Built using React and Redux</p>
                </div>
                <div className='amiibo'>
                    <a href='https://github.com/MicheSi/amiibo' target='_blank' rel='noopener noreferrer'><img src={amiibo} alt='Amiibo'/></a>
                    <h3>Amiibo</h3>
                    <p>Amiibo is a React app that allows users to look up images and information on Nintendo Amiibos.</p>
                    <p>▪ Utilized Amiibo API to generate data on Amiibos</p>
                    <p>▪ Built using React with Styled Components and Reactstrap for styling libraries</p>
                </div>
            </div>
        </section>
    )
}

export default Work;