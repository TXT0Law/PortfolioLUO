import { useState } from 'react';
import { Parallax } from 'react-parallax';
import WeatherImg from '../assets/Weather_project.png';
import SecurityImg from '../assets/SecurityPHP.png';
import AC_project from '../assets/AC_project.png';

// Example project data
const projects = [
  {
    img: WeatherImg,
    title: 'Weather Report Website',
    desc: [
    //   "Weather Report Website's data is from OpenWeatherAPI.",
    //   "The Website is fully designed by Javascript."
    ],
    link: '#'
  },
  {
    img: SecurityImg,
    title: 'Security PHP Project',
    desc: [
    //   "Security PHP Project was showing the skill of preventing:",
    //   "XSS Attacking, Cookies Security and SQL injection."
    ],
    link: '#'
  },
  {
    img: AC_project,
    title: 'Accounting Application',
    desc: [
    //   "AC Project was showing the skill of preventing:",
    //   "XSS Attacking, Cookies Security and SQL injection."
    ],
    link: '#'
  },
//   {
//     img: AC_project,
//     title: 'ccc Application',
//     desc: [
//     //   "AC Project was showing the skill of preventing:",
//     //   "XSS Attacking, Cookies Security and SQL injection."
//     ],
//     link: '#'
//   },
];

const sessionTwo = () => {
  const [current, setCurrent] = useState(0);

  const prevProject = () => setCurrent((current - 1 + projects.length) % projects.length);
  const nextProject = () => setCurrent((current + 1) % projects.length);

  // Get indices for left, center, right
  const left = (current - 1 + projects.length) % projects.length;
  const right = (current + 1) % projects.length;

  return (
    <Parallax className='Section4' strength={800}>
      <h1 className='S4_title'>Project Experience</h1>
      <div className='S4_content' id='ProjectExp'>
        <button className="S4_arrow left" onClick={prevProject}>&lt;</button>
        <div className="S4_carousel">
          {[left, current, right].map((idx, i) => (
            <a
              key={idx}
              href={projects[idx].link}
              className={`S4_project-container${i === 1 ? ' active' : ''}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className='S4_projectIntro' src={projects[idx].img} alt={projects[idx].title} />
              <p className='projecttitle'>{projects[idx].title}</p>
              {projects[idx].desc.map((d, j) => (
                <p className='projectDes' key={j}>{d}</p>
              ))}
            </a>
          ))}
        </div>
        <button className="S4_arrow right" onClick={nextProject}>&gt;</button>
      </div>
    </Parallax>
  );
};

export default sessionTwo