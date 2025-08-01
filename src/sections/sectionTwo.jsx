import { Parallax } from 'react-parallax';
import Icon from '../assets/myicon.jpg';


const sessionTwo = () => (
    <Parallax className='Section2' strength={800}>
       <div className='S2_content' id='aboutme'>
            <img src={Icon} className='iconsty'></img>
            
            <p>
            <b><mark>About me</mark></b>
            <br></br>
            I am an enthusiastic and resourceful Programmer,<br/>
            driven by a deep interest in technology and a knack for tackling complex problems.<br/>
            My expertise spans AI Operation, C++/C# Programming,<br/>
            and Android Studio Development, all of which I<br/>
            apply with a spirit of collaboration and teamwork.<br/>
            </p>

            
       </div>

    </Parallax>
);


export default sessionTwo