import Tilt from 'react-tilt'
import { Motion } from 'react-motion'

import { Styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVarian } from '../utils/motion'


const Works = () => {
  return (
    <>
      <motion.div variants={textVariants()}>
         <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Works, '')