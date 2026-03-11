import { Parallax } from 'react-parallax';
// Import images (ensure filename case matches actual files)
import HKCCLogo from '../assets/HKCC_logo.png';
import PolyULogo from '../assets/PolyU_logo.jpeg';

const SectionEducation = () => (
    <Parallax className='Section-Education' strength={300}>
        <div className='section-content' id='Education'>
            <h1 className='section-title'>Education</h1>
            
            <div className='timeline'>
                <div className='timeline-item'>
                    <div className='timeline-date'>2024 - 2027</div>
                    <div className='timeline-content'>
                        {/* Header wrapper for text and Logo */}
                        <div className='timeline-header'>
                            <div className='timeline-text'>
                                <h3>The Hong Kong Polytechnic University</h3>
                                <p className='degree'>BSc (Hons) Information Security</p>
                            </div>
                            <div className='timeline-logo'>
                                <img src={PolyULogo} alt="PolyU Logo" />
                            </div>
                        </div>
                        
                        <ul className='highlights'>
                            <li>Focus: cybersecurity and penetration testing</li>
                            <li>Key courses: cryptography, network security, system security</li>
                        </ul>
                    </div>
                </div>
                
                <div className='timeline-item'>
                    <div className='timeline-date'>2022 - 2024</div>
                    <div className='timeline-content'>
                        {/* Same structure for second item */}
                        <div className='timeline-header'>
                            <div className='timeline-text'>
                                <h3>HKCC Hong Kong Community College</h3>
                                <p className='degree'>Associate in Information Technology</p>
                            </div>
                            <div className='timeline-logo'>
                                <img src={HKCCLogo} alt="HKCC Logo" />
                            </div>
                        </div>

                        <ul className='highlights'>
                            <li>GPA: 3.52</li>
                            <li>Key courses: programming, databases, network fundamentals</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Parallax>
);

export default SectionEducation;