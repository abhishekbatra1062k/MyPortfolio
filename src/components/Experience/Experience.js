import './Experience.css'

const Experience = ({ project }) => (
  <div className='project'>
    <h4>{project.role}</h4> <br />
    <h3>{project.companyName}</h3>
    <p className='project__description'>{project.description}</p>
    <div className="img"><img src={project.img} alt={project.alt} /></div>
    <p className='project__description'>({project.duration})</p>
  </div>
)

export default Experience
