import Tilt from 'react-tilt'
import { Motion } from 'react-motion'

import { Styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVarian } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return ( 
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)} > 
      <Tilt
        options={{
        max: 45,
        scale: 1,
        speed: 450,
        }}
        className='bg-terntiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img 
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute insert-0 flex justify-end m-3 card-img_hover'>
            <div  
              onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />

              {/* If Want to insert a live icon to redirect to the live progert website (need to change the icon) video time 1.55.20 */}
              {/* <div  
              onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />  */}

            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white text-[24px] font-bold'>{name}</h3>
          <p className='text-secondary text-[14px]  mt-2'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => ( 
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
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