import dmrc from './images/dmrc.jpg'
import cn from './images/cn.jpg'
import flixstock from './images/flixstock.jpg'

const header = {
  homepage: 'https://abhishek-batra-portfolio.netlify.app/',
  title: 'AB',
}

const about = {
  name: 'Abhishek Batra',
  role: 'Software Development Engineer',
  description: 'A Highly-Motivated, Innovation-Oriented & Passionate Learner Who Loves Exploring New Technologies.',
  resume: 'https://drive.google.com/file/d/12Ehq8hPDLI-ivzSAJ-C7wMY2ccomziEA/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/abhishek-batra-1ba574175',
    github: 'https://github.com/abhishekbatra1062k',
    leetcode: 'https://leetcode.com/u/a1062000batra/'
  },
}

const projects = [
  {
    name: 'COIN-MARKET',
    description: 'Developed a full-stack web application to scrape and display real-time cryptocurrency data from coinmarketcap.com.',
    stack: ['Django', 'Python', 'React', 'HTML', 'JavaScript', 'REST API', 'Web Scraping'],
    sourceCode: 'https://github.com/abhishekbatra1062k/coin-market',
  },
  {
    name: 'STORE-X',
    description: 'Developed an ecommerce app involving features of updating, deleting items from cart, processing oder after checkout.',
    stack: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/abhishekbatra1062k/Store-X'
  },
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
    name: 'CODEPEN-CLONE',
    description: 'This is an online platform for testing and showcasing user-created HTML, CSS and JavaScript code snippets.',
    stack: ['CSS', 'HTML', 'React', 'JavaScript'],
    sourceCode: 'https://github.com/abhishekbatra1062k/Codepen-Clone',
    livePreview: 'https://codesandbox.io/s/github/abhishekbatra1062k/Codepen-clone'
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
    description: 'Developed DLASMS, a system for orchestrating deep learning models in image processing, achieving a 500% throughput increase. Executed Zodiac project using fastapi, starlette, AWS (EC2, S3), and Ray, reducing API response time by 20%.',
  },
  {
    companyName: 'Delhi Metro Rail Corporation',
    role: 'PHP Web Developer',
    duration: 'Aug 2021 - Sept 2021',
    img: dmrc,
    alt: 'DMRC',
    description: 'Introduced vital functionalities to DMRC Maintenance Website, including real-time availability checks for maintenance tools and a comprehensive roster system for team members.',
  },
  {
    companyName: 'Coding Ninjas',
    role: 'Teaching Assistant',
    duration: 'Mar 2020 - Jul 2020',
    img: cn,
    alt: 'Coding Ninjas',
    description: 'Provided in-depth explanations of Data Structures and Algorithms concepts to students. Mentored students one-on-one, offering guidance on problem-solving techniques, debugging strategies, and code optimization methods.',
  }
]

const skills = [
  'Core: Data Structures & Algorithms, Object-Oriented Programming, Problem Solving, System Design',
  'Languages worked with:  C, C++, Python, JavaScript, SQL, PHP, HTML, CSS',
  'Frameworks/Libraries used:  Nodejs, Django, Fastapi, Ray, ReactJS, Pandas, OpenCV, Numpy',
  'Softwares used:  Linux, Postman, Windows, VS Code, S3 Browser, MongoDB Compass',
]

const contact = {
  email: 'abhishekbatrasde@gmail.com',
}

export { header, about, projects, experiences, skills, contact }
