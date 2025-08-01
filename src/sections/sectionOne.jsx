import { Parallax } from 'react-parallax';
import mainback from '../assets/background.jpg';
import ProfileCard from "../components/ProfileCard.jsx";


const sessionOne = () => (
    <Parallax className='Section1' bgImage={mainback} strength={800}>
       <div className='S1_content'>
            <ProfileCard/>
            
       </div>

    </Parallax>
);


export default sessionOne