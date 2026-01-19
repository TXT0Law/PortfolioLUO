import { Parallax } from 'react-parallax';

const competitions = [
    {
        name: 'HKCERT CTF 2025',
        year: '2025',
        award: 'Top 5',
        description: 'It is one of the largest cybersecurity competitions in Hong Kong',
        icon: '🏆'
    },
];

const SectionCompetitions = () => (
    <Parallax className='Section-Competitions' strength={300}>
        <div className='section-content' id='Competitions'>
            <h1 className='section-title'>Competitions & Awards</h1>
            
            <div className='competitions-grid'>
                {competitions.map((comp, index) => (
                    <div key={index} className='competition-card'>
                        <div className='comp-icon'>{comp.icon}</div>
                        <div className='comp-year'>{comp.year}</div>
                        <h3>{comp.name}</h3>
                        <div className='comp-award'>{comp.award}</div>
                        <p>{comp.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </Parallax>
);

export default SectionCompetitions
