import Tilt from 'react-tilt'
import { Motion } from 'react-motion'

import { Styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVarian } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return ( 
    <motion.div>
      test
    </motion.div>
  )
}


const Works = () => {
  return (
    <>
      <motion.div variants={textVariants()}>
         <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          WWRITE SOMETHING OF MY OWN PROJECTS OVER HERE AND HOW THEM AFECTED ME AND MY LIFE OR WORKLIFE
        </motion.p>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}

      </div>

      </div>
    </>
  )
}

export default SectionWrapper(Works, '')