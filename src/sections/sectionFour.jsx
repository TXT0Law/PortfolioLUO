import { Parallax } from 'react-parallax';
// 1. 引入 SVG Logo
import HKGovLogo from '../assets/HKGOV.svg';

const SectionExperience = () => (
    <Parallax className='Section-Experience' strength={300}>
        <div className='section-content' id='Experience'>
            <h1 className='section-title'>Experience</h1>
            
            <div className='timeline'>
                <div className='timeline-item'>
                    <div className='timeline-date'>July 2025</div>
                    <div className='timeline-content'>
                        
                        {/* 2. 使用 timeline-header 包裹文字與 Logo，共用之前的 CSS */}
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

                <div className='timeline-item'>
                    <div className='timeline-date'>2023 - 2024</div>
                    <div className='timeline-content'>
                        
                        {/* 如果其他經歷沒有 Logo，可以只保留標題結構，或不加 Logo div */}
                        <h3>Other Experience</h3>
                        <p className='position'>Role Title</p>
                        
                        <ul className='responsibilities'>
                            <li>Responsibility description 1</li>
                            <li>Responsibility description 2</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Parallax>
);

export default SectionExperience;