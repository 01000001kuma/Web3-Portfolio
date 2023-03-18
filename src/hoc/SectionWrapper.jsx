import { motion } from 'framer-motion'

import { styles } from '../styles'  
import { staggerContainer } from '../utils/motion'


const SectionWrapper = (component, idName) => {
    function HOC(   ) {
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView='show'
            viewport={{once: true, amount: 025}}
            className={'${styles.padding} max-w-7xl mx-auto relative z-0'}
        
        >
            <span className='hash-span' id={idName}>
                &nbsp; 
            </span>
            <Component />
        </motion.section>
    }
}

export default SectionWrapper