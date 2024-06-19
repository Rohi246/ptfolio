import themepattern from '../assets/theme_pattern.svg'
import profikesvg from '../assets/profile_img.svg'
import { Constants } from '../COSTANTS'
import projects from '../PROJECTS'
import Project from './Project'

const About = () => {
  return (
    <div className='  text-white flex flex-col items-center'>

        <div className=' flex flex-row justify-between relative text-[80px] '>
              <h1>About Me </h1>
        <img src={themepattern} alt='theme pattern'/></div>


        <div className=' flex flex-row gap-9 '>
            <div className=' relative h-[150px] w-[150px] left items-start'>
                 <img className=' absolute bottom-0 right-0 -z-10'src={profikesvg} alt=" profile" />
            </div >

           <div className='flex flex-col'>
           <div className=' right items-end'>
                <p> 
                    {Constants.hero.description1}
                </p>
                <p>{Constants.hero.description2}</p>
            </div>
            <div className=' about--skills'>
                <div className='about-skill'>
                    <p> {Constants.hero.skills[1]}</p>
                    <hr />
                    <p> {Constants.hero.skills[2]}</p>
                    <p> {Constants.hero.skills[3]}</p>
                </div>
            </div>
           </div>
           
        </div>
        <div className='achievements'>
                <h1 className=' font-semibold '>Achievements</h1>
            </div>


            <div className='projects flex flex-col gap-4 items-center'>

                <h1 className='font-outfit'>
                    Projects
                </h1>
                  <div className='grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
                  {
                        projects.map(
                            (project,index)=>{
                                return(
                                <Project key={index} 
                                imgurl={project.imgurl} 
                                name={project.name}
                                 description={project.description}
                                 size={project.size}/>
                                )
                            }
                        )

                    }
                  </div>
                
            </div>
    </div>
  )
}

export default About