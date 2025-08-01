import { Parallax } from 'react-parallax';


const sessionTwo = () => (
    <Parallax className='Section3' strength={800}>
       <div className='S3_content' id='Resume'>
            {/* <div className='resumeblock'>
                <h1>Resume</h1>
                <p>wdadawdwadawdawdadawdawdadawdwadawdawdadawda</p>
                <p>wdadawdwadawdawdadawdawdadawdwadawdawdadawda</p>
                <p>wdadawdwadawdawdadawdawdadawdwadawdawdadawda</p>
                <p>wdadawdwadawdawdadawdawdadawdwadawdawdadawda</p>
                <p>wdadawdwadawdawdadawdawdadawdwadawdawdadawda</p>
                <p>wdadawdwadawdawdadawda</p>

            </div> */}

            <div className='edu_exp_block'>
                <h2>Education</h2>
                <p id='school'>HKCC HONG KONG COMMUNITY COLLEGE</p>
                <p id='descr'>ASSOCIATE IN INFORMATION TECHNOLOGY(2024)</p>

                <p id='school'>The Hong Kong Polytechnic University</p>
                <p id='descr'>BSc (HONS) INFORMATION SECURITY(2024-2027)</p>


                <h2 className='Small_block'>Experience</h2>
                <p id='school'>Hong Kong Government</p>
                <p id='descr'>Placement Student(July, 2025)</p>

            </div>
            
            <div className='skill_download_block'>
                <h2>Skill</h2>
                    <ul>
                        <li>AI Operation</li>
                        <li>Basic JAVA</li>
                        <li>C++/C# Programming</li>
                        <li>Teamwork</li>
                        <li>Basic network security knowledge</li>
                        <li>Android Studio development</li>
                        <li>Basic React</li>
                    </ul>

                <a href="/src/CV(POLYU_JOB).pdf" download><button className='Small_block'><h2>Download CV</h2></button></a>
            </div>


       </div>

    </Parallax>
);


export default sessionTwo