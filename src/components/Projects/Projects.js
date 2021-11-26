import uniqid from 'uniqid'
import { projects, experiences } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import Experience from '../Experience/Experience'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <div>
      <section id='projects' className='section projects'>
        <h2 className='section__title'>Projects</h2>

        <div className='projects__grid'>
          {projects.map((project) => (
            <ProjectContainer key={uniqid()} project={project} />
          ))}
        </div>
      </section>

      <section id='experiences' className='section projects'>
        <h2 className='section__title'>Experiences</h2>

        <div className='projects__grid'>
          {experiences.map((experience) => (
            <Experience key={uniqid()} project={experience} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Projects
