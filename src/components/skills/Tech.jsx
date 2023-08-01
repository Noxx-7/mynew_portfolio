import React from 'react'
import { motion } from 'framer-motion'


const Technologies = ({variants}) =>  (
    <motion.div variants={variants} className="skills__content">
        <h3 className="skills__title">Skills</h3>

        <div className="skills__box">

            <div className="skills__group">
                

                <div className="skills__data">
                <i class='bx bxl-java' ></i>

                 <div>
                    <h3 className="skills__name">Java </h3>
                 </div>
                </div>

                <div className="skills__data">
                <i class='bx bxl-devops' ></i>

                 <div>
                    <h3 className="skills__name">DevOps</h3>
                 </div>
                </div>
                <div className="skills__data">
                <i class='bx bxl-cloud' ></i>

                 <div>
                    <h3 className="skills__name">Cloud Computing</h3>
                 </div>
                </div>

                <div className="skills__data">
                 <i class='bx bxl-git'></i>

                 <div>
                    <h3 className="skills__name">Git</h3>
                 </div>
                </div>


                <div className="skills__data">
                 <i class='bx bxl-figma'></i>

                 
                 <div>
                 <h3 className="skills__name">Flutter</h3>
                    
                 </div>
                </div>

                
                


            </div>
        </div>
       
    </motion.div>
  );

export default Technologies