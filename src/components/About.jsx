import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ServiceCard = ({ title, icon, index }) => {
  return(
    <p>{title}</p>
  )

}

const About = () => {
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='m-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
      I am well-versed in many aspects of React development, from setting up the environment to creating components. I have also worked with HTML, CSS (SCSS, SaaS), SVG (elements and animations), JavaScript, and some backend technologies like NodeJS and Express. If your technologies match mine let me help you solve that problem.

      🚀 Actively looking for a new challenge as a Front-end Developer! How about a cup of coffee?

      Cultivating my creativity with interesting projects is essential. I'm highly organized and love working with clients and fulfilling their needs. I have a solid knowledge of the management, operation, logistics, and development of all activities related to e-commerce software companies and start-ups. 

      Teamwork makes the dream work. 

      I'm passionate about developing products and enhancing my creativity along the way. I would describe myself as an energetic and decisive person. In my professional career, I've been focused on evaluating operational needs in order to offer solutions to save costs and increase benefits and customer satisfaction.

      🤝 Feel free to reach out to me: a_illera@yahoo.com
      💻 Check out my GitHub profile: github.com/01000001kuma
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <serviceCard key={service.title} index={index}  {...services}/>

      ))} 
    </div>
  
  </>
}

export default About  