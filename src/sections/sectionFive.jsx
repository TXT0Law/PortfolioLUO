import { Parallax } from 'react-parallax';


const sessionTwo = () => (
    <Parallax className='Section5' strength={800}>
       <div className='S5_content' id='contactme'>

       <div>
            <h1>Contact me</h1>
            <form
  className='forminput'
  action="mailto:luojunhua07@gmail.com"
  method="POST"
  encType="text/plain"
>
    <label htmlFor="C_name">Name</label><br/>
    <input className="inforbox" type="text" name="C_name" id="C_name" placeholder="Enter Your Name" required/><br/>

    <label htmlFor="C_email">Email</label><br/>
    <input className="inforbox" type="email" name="C_email" id="C_email" placeholder="Enter Your Email" required/><br/>

    <label htmlFor="C_message">Message</label><br/>
    <textarea name="C_message" id="C_message" cols="30" rows="10" placeholder="Enter your Comment" required></textarea><br/>

    <input className="submitbutton" type="submit" value="Send message >"/><br/>
</form>

        </div>





       </div>

    </Parallax>
);


export default sessionTwo