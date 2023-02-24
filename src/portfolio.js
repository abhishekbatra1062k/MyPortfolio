import dmrc from './images/dmrc.jpg'
import cn from './images/cn.jpg'
import flixstock from './images/flixstock.jpg'

const header = {
  homepage: 'https://abhishek-batra-potfolio.netlify.app/',
  title: 'AB',
}

const about = {
  name: 'Abhishek Batra',
  role: 'Software Developer Enthusiast',
  description: 'A Highly-Motivated, Innovation-Oriented & Passionate Learner Who Loves Exploring New Technologies.',
  resume: 'https://drive.google.com/file/d/1zN4p7XnHV2941b3Tw5BKsl3juwR6VP6C/view?usp=share_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/abhishek-batra-1ba574175',
    github: 'https://github.com/abhishekbatra1062k',
  },
}

const projects = [
  {
    name: 'RECIPE LIST',
    description: 'This is a web app with basic functionality to search, add, edit and remove recipes.',
    stack: ['CSS', 'HTML', 'React', 'JavaScript'],
    sourceCode: 'https://github.com/abhishekbatra1062k/Recipe-List',
    livePreview: 'https://codesandbox.io/s/github/abhishekbatra1062k/Recipe-List'
  },
  {
    name: 'WEATHER APP',
    description: 'This App uses data from "mapbox" API and "weatherstack" API. You can use this site to get WEATHER.',
    stack: ['Node.js', 'JavaScript', 'HTML'],
    sourceCode: 'https://github.com/abhishekbatra1062k/Weather-Website',
    livePreview: 'https://codesandbox.io/s/github/abhishekbatra1062k/Weather-Website',
  },
  {
    name: 'Game-2048',
    description: 'This is the clone of famous 2048 game.',
    stack: ['CSS', 'JavaScript', 'HTML'],
    sourceCode: 'https://github.com/abhishekbatra1062k/Game-2048',
    livePreview: 'https://codesandbox.io/s/github/abhishekbatra1062k/Game-2048?file=/script.js',
  },
  {
    name: 'SORTING VISUALIZER',
    description: 'Use this app to visulaize various sorting algorithms.',
    stack: ['CSS', 'HTML', 'React', 'JavaScript'],
    sourceCode: 'https://github.com/abhishekbatra1062k/Sorting-Visualiser',
    livePreview: 'https://codesandbox.io/s/github/abhishekbatra1062k/Sorting-Visualizer',
  },
  {
    name: 'ETCH-A-SKETCH',
    description: 'This is a browser version of toy similar to Etch A Sketch.',
    stack: ['CSS', 'HTML', 'JavaScript'],
    sourceCode: 'https://github.com/abhishekbatra1062k/Etch-A-Sketch',
    livePreview: 'https://codesandbox.io/s/github/abhishekbatra1062k/Etch-A-Sketch'
  },
  {
    name: 'ROCK-PAPER-SCISSORS GAME',
    description: 'The familiar game of Rock, Paper, Scissors.',
    stack: ['CSS', 'HTML', 'JavaScript'],
    sourceCode: 'https://github.com/abhishekbatra1062k/Rock-Paper-Scissors',
    livePreview: 'https://codesandbox.io/s/github/abhishekbatra1062k/Rock-Paper-Scissors',
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
    companyName: 'Flixstock',
    role: 'Associate Software Development Engineer',
    duration: 'Aug 2022 - Present',
    img: flixstock,
    alt: 'Flixstock',
    description: 'Exposure to deliver Production-Level Code. Used object-oriented programming structure. Responsible for Machine Learning Modules’ Pipeline Code Development. Used Python libraries like Ray, Ray Serve, Opentelemtry, jaeger and Amazon Web Services(AWS) for Cluster management and scaling. Developed APIs python libraries like Fastapi and Starlette.',
  },
  {
    companyName: 'Delhi Metro Rail Corporation',
    role: 'PHP Web Developer',
    duration: 'Aug 2021 - Sept 2021',
    img: dmrc,
    alt: 'DMRC',
    description: 'Added Features To DMRC Maintenance Website. Implemented Enhancements To Improve User Experience.',
  },
  {
    companyName: 'Coding Ninjas',
    role: 'Teaching Assistant',
    duration: 'Mar 2020 - Jul 2020',
    img: cn,
    alt: 'Coding Ninjas',
    description: 'Debugging C++ Codes. Explaining DS Concepts. Monitoring Performance of Assigned Students.',
  }
]

const skills = [
  'C',
  'C++',
  'Python',
  'HTML',
  'CSS',
  'ReactJS',
  'JavaScript',
  'PHP',
  'Nodejs',
  'SQL',
  'Git',
  'DBMS',
  'OOPS',
  'Data Structures',
]

const contact = {
  email: 'a1062000batra@gmail.com',
}

export { header, about, projects, experiences, skills, contact }
