import dmrc from './images/dmrc.jpg'
import cn from './images/cn.jpg'

const header = {
  homepage: '#',
  title: 'AB',
}

const about = {
  name: 'Abhishek Batra',
  role: 'Software Developer Enthusiast',
  description: 'A Passionate Learner Who Loves Exploring New Technologies.',
  resume: 'https://drive.google.com/file/d/1B6tpXJQK1v9eVrSybkZaABuHFGM6Q0ZN/view?usp=drivesdk',
  social: {
    linkedin: 'https://www.linkedin.com/in/abhishek-batra-1ba574175',
    github: 'https://github.com/abhishekbatra1062k',
  },
}

const projects = [
  {
    name: 'PORTFOLIO',
    description: 'A clean and simple portfolio describing my projects.',
    stack: ['CSS', 'HTML', 'React', 'JavaScript'],
    sourceCode: 'https://github.com/abhishekbatra1062k/',
    livePreview: '#'
  },
  {
    name: 'WEATHER APP',
    description: 'This App uses data from "mapbox" API and "weatherstack" API. You can use this site to get WEATHER.',
    stack: ['Node.js', 'JavaScript', 'HTML'],
    sourceCode: 'https://github.com/abhishekbatra1062k/Weather-Website',
    livePreview: 'https://abatra-weather-application.herokuapp.com',
  },
  {
    name: 'SORTING VISUALIZER',
    description: 'Use this app to visulaize various sorting algorithms.',
    stack: ['CSS', 'HTML', 'React', 'JavaScript'],
    sourceCode: 'https://github.com/abhishekbatra1062k/Sorting-Visualiser',
    livePreview: 'https://sort-num.herokuapp.com',
  },
  {
    name: 'TEXT COMPRESSION',
    description: 'We can compress and decompress text files consisting of 128 ASCII characters using "Huffman Coding".',
    stack: ['C++', 'File Handling'],
    sourceCode: 'https://github.com/abhishekbatra1062k/Text-Compression',
  },
]

const experiences=[
  {
    companyName: 'Delhi Metro Rail Corporation',
    role: 'PHP Web Developer',
    duration: '2 Months',
    img: dmrc,
    alt: 'DMRC',
    description: 'Added Features To DMRC Maintenance Website. Implemented Enhancements To Improve User Experience.',
  },
  {
    companyName: 'Coding Ninjas',
    role: 'Teaching Assistant',
    duration: '4 Months',
    img: cn,
    alt: 'Coding Ninjas',
    description: 'Debugging C++ Codes. Explaining DS Concepts. Monitoring Performance of Assigned Students.',
  }
]

const skills = [
  'C++',
  'C',
  'Python',
  'HTML',
  'CSS',
  'JavaScript',
  'PHP',
  'React',
  'Nodejs',
  'MySQL',
  'Git',
  'DBMS',
  'OOPS',
  'Data Structures',
]

const contact = {
  email: 'a1062000batra@gmail.com',
}

export { header, about, projects, experiences, skills, contact }
