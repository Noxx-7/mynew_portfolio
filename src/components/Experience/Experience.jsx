import React,{ useState } from 'react'
import './experience.css'
import { motion } from 'framer-motion';
import {staggerContainer, fadeIn}  from '../../utils/motion'
import { TitleText } from '../CustomTexts';


const Qualifications = () => {
    const [toggleState, setToggleState] = useState(1)

    const ToggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <motion.section 
    className='qualification section' 
    id='experience'
    variants={staggerContainer}
    initial = 'hidden'
    whileInView='show'
    viewport={{once: false, amount: 0.25}}>
    <TitleText title="Professional Experience" />
        <div className='qualification__container container'>
            <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className='qualification__tabs'>
                <div className={toggleState === 1 ? 'qualification__button qualification__active button__flex' :
                 'qualification__button button__flex'} onClick={()=> ToggleTab(1)}>Twilio</div>
                <div className={toggleState === 2 ? 'qualification__button qualification__active button__flex' :
                 'qualification__button button__flex'} onClick={()=> ToggleTab(2)}>Microsoft</div>
                <div className={toggleState === 3 ? 'qualification__button qualification__active button__flex' :
                 'qualification__button button__flex'} onClick={()=> ToggleTab(3)}>GirlScript Summer of Code</div>
            </motion.div>

                <motion.div variants={fadeIn('up', 'spring', 0.4, 1)} className={toggleState == 1 ? 'qualification__content qualification__content-active' : 'qualification__content'}>            
                        <h3 className='qualification__title'>Twilio Field Operator (Rank 1) @ <span className='company'>Twilio</span> </h3>
                        <small className='qualification__calender'>March 2022 - Present</small>
                        <motion.div variants={fadeIn('up', 'spring', 0.6, 1)} className='qualification__details'>
                            <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'> I am one of the Top 10 folks in India & Top 200 folks globally who have been accepted into the Twilio Field Operator program.</p>
                            <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'> We currently have over 350+ members on our discord server where I share programming and Twilio related knowledge.</p>
                            <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'> I will be writing blog posts, streaming content, planning, and hosting fun events on campus as a Twilio Campus Ambassador</p>
                        </motion.div>
                </motion.div>
                <div className={toggleState == 2 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
                   
                        <h3 className='qualification__title'>Future Talent Ready Intern  @ <span className='company'>Microsoft</span> </h3>
                        <small className='qualification__calender'>March 2022 - July 2022 </small>
                        <div className='qualification__details'>
                            <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'>I gained 120+ hours of in-demand technology skills and worked on real-world issues using Microsoft Cloud and GitHub tools</p>
                            <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'> Developed a website, deployed it using Azure Static Web, and passed the Azure Fundamentals and Security Compliance exams.</p>
                    </div>
                </div>
                <div className={toggleState == 3 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
                    
                        <h3 className='qualification__title'>Contributor @ <span className='company'>GirlScript Summer of Code</span> </h3>
                        <small className='qualification__calender'>March 2022 - May 2022</small>
                        <div className='qualification__details'>
                            <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'> Over 7+ of my PRs were integrated into projects during GSSoC'22 in this internship.</p>
                            <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'> In addition to learning something useful and gaining an in-depth understanding of open source, I also achieved a ranking of 98th out of more than 850 contributors.</p>

                    </div>
                </div>
            
        </div>
        <br />

    </motion.section>
  )
}

export default Qualifications