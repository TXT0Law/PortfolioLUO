import { Parallax } from 'react-parallax';

const SectionSkills = () => (
    <Parallax className='Section-Skills' strength={300}>
        <div className='section-content' id='Skills'>
            <h1 className='section-title'>Skills</h1>
            
            <div className='skills-container'>
                <div className='skill-category'>
                    <h3>Programming Languages</h3>
                    <div className='skill-items'>
                        <div className='skill-item'>
                            <span className='skill-name'>Python</span>
                            <div className='skill-bar'>
                                <div className='skill-progress' style={{width: '85%'}}></div>
                            </div>
                        </div>
                        <div className='skill-item'>
                            <span className='skill-name'>JavaScript / React</span>
                            <div className='skill-bar'>
                                <div className='skill-progress' style={{width: '75%'}}></div>
                            </div>
                        </div>
                        <div className='skill-item'>
                            <span className='skill-name'>C++ / C#</span>
                            <div className='skill-bar'>
                                <div className='skill-progress' style={{width: '70%'}}></div>
                            </div>
                        </div>
                        <div className='skill-item'>
                            <span className='skill-name'>Java</span>
                            <div className='skill-bar'>
                                <div className='skill-progress' style={{width: '60%'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='skill-category'>
                    <h3>Security Tools</h3>
                    <div className='skill-tags'>
                        <span className='tag'>Burp Suite</span>
                        <span className='tag'>Wireshark</span>
                        <span className='tag'>Nmap</span>
                        <span className='tag'>Metasploit</span>
                        <span className='tag'>John the Ripper</span>
                    </div>
                </div>
                
                <div className='skill-category'>
                    <h3>Other Skills</h3>
                    <div className='skill-tags'>
                        <span className='tag'>AI Operation</span>
                        <span className='tag'>Android Studio</span>
                        <span className='tag'>Git</span>
                        <span className='tag'>Linux</span>
                        <span className='tag'>Network Security</span>
                    </div>
                </div>
            </div>
            
            <div className='cv-download'>
                <a href="../assets/CV.pdf" download>
                    <button className='download-btn'>Download CV</button>
                </a>
            </div>
        </div>
    </Parallax>
);

export default SectionSkills
