import { Parallax } from 'react-parallax';
import HKCERTCert from '../assets/cert/HKCERT_CTF.png';
import PolyUCTFCert from '../assets/cert/2025PolyUCTFQualifiersCompetition-SecondRunner-up.jpeg';

const competitions = [
    {
        name: 'PolyU CTF Qualifier Competition',
        year: '2025',
        award: 'SECOND RUNNER UP',
        description: 'PolyU CTF Qualifiers Competition',
        cert: PolyUCTFCert,
        certType: 'image'
    },
    {
        name: 'HKCERT CTF 2025',
        year: '2025',
        award: 'BRONZE AWARD',
        description: 'HKCERT Capture the Flag Challenge 2025 (Tertiary Institution Category)',
        cert: HKCERTCert,
        certType: 'image'
    },
    {
        name: 'Firebird CTF 2026',
        year: '2026',
        award: 'SECOND RUNNER UP',
        description: 'Firebird CTF 2026',
        icon: '🥉'
    },

];

const SectionCompetitions = () => (
    <Parallax className='Section-Competitions' strength={300}>
        <div className='section-content' id='Competitions'>
            <h1 className='section-title'>Competitions & Awards</h1>
            
            <div className='competitions-grid'>
                {competitions.map((comp, index) => (
                    <div key={index} className='competition-card'>
                        <div className='comp-cert'>
                            {comp.cert && comp.certType === 'image' ? (
                                <img src={comp.cert} alt={`${comp.name} certificate`} />
                            ) : comp.cert && comp.certType === 'pdf' ? (
                                <a href={comp.cert} target="_blank" rel="noopener noreferrer" className='cert-pdf-link'>
                                    <span className='cert-pdf-icon'>📄</span>
                                    <span>View Certificate (PDF)</span>
                                </a>
                            ) : (
                                <div className='comp-icon'>{comp.icon || '🏆'}</div>
                            )}
                        </div>
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
