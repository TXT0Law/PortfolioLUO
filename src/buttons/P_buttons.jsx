import styles from './P_buttons.module.css'

function P_buttons(){

    return(
            <div>
            <button className={styles.p_buttons}><span><a href='#AboutMe'>About me</a></span></button>
            <button className={styles.p_buttons}><span><a href='#Education'>Education</a></span></button>
            <button className={styles.p_buttons}><span><a href='#ProjectExp'>Project Experience</a></span></button>
            <button className={styles.p_buttons}><span><a href='#Contact'>Contact me</a></span></button>
            </div>

    );


}
export default P_buttons