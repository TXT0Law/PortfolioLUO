import { Parallax } from 'react-parallax';
// Import SVG logos
import HKGovLogo from '../assets/HKGOV.svg';

const SectionExperience = () => (
    <Parallax className='Section-Experience' strength={300}>
        <div className='section-content' id='Experience'>
            <h1 className='section-title'>Experience</h1>
            
            <div className='timeline'>
                <div className='timeline-item'>
                    <div className='timeline-date'>July 2025</div>
                    <div className='timeline-content'>
                        
                        {/* Use timeline-header to wrap text and Logo, sharing common CSS */}
                        <div className='timeline-header'>
                            <div className='timeline-text'>
                                <h3>Hong Kong Government</h3>
                                <p className='position'>Placement Student</p>
                            </div>
                            <div className='timeline-logo'>
                                <img src={HKGovLogo} alt="Hong Kong Government Logo" />
                            </div>
                        </div>

                        <ul className='responsibilities'>
                            <li>Contributed to government security initiatives</li>
                            <li>Assisted in system vulnerability assessments</li>
                            <li>Learned enterprise-grade security practices</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Parallax>
);

export default SectionExperience;