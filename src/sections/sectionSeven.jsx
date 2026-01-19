import { Parallax } from 'react-parallax';

// 這裡填寫你實際參加過的 CTF 比賽
const ctfCompetitions = [
    {
        name: 'HKCERT CTF 2025',
        date: 'Dec 2025',
        link: 'https://github.com/yourusername/hkcert-2025-writeup' // 替換成你的 writeup 網址
    },
];

const SectionCTF = () => {
    return (
        <Parallax className='Section-CTF' strength={300}>
            <div className='section-content' id='CTF'>
                <h1 className='section-title'>CTF Competitions</h1>
                
                {/* 移除了過濾按鈕，直接顯示網格 */}
                <div className='ctf-grid'>
                    {ctfCompetitions.map((comp, index) => (
                        <a 
                            href={comp.link} 
                            key={index} 
                            className='ctf-card simple-mode'
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <div className='ctf-header-simple'>
                                <span className='date'>{comp.date}</span>
                            </div>
                            <h3>{comp.name}</h3>
                            <p className='view-writeup'>View Writeups &rarr;</p>
                        </a>
                    ))}
                </div>
            </div>
        </Parallax>
    );
};

export default SectionCTF;