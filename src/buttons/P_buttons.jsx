import styles from './P_buttons.module.css'

const sections = [
    { id: 'AboutMe', label: 'About me' },
    { id: 'Education', label: 'Education' },
    { id: 'ProjectExp', label: 'Project Experience' },
    { id: 'Contact', label: 'Contact me' },
];

function P_buttons() {
    const handleClick = (e, sectionId) => {
        e.preventDefault();
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            {sections.map(({ id, label }) => (
                <a
                    key={id}
                    href={`#${id}`}
                    className={styles.p_buttons}
                    onClick={(e) => handleClick(e, id)}
                >
                    <span>{label}</span>
                </a>
            ))}
        </div>
    );
}
export default P_buttons