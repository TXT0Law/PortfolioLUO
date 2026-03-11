import { Link, useLocation } from 'react-router-dom';

function TopNavigation() {
    const location = useLocation();
    const isOnPortfolio = location.pathname === '/';

    const navItems = [
        { id: 'home', label: 'LUO', isTitle: true },
        { id: 'AboutMe', label: 'About' },
        { id: 'Education', label: 'Education' },
        { id: 'Experience', label: 'Experience' },
        { id: 'Skills', label: 'Skills' },
        { id: 'ProjectExp', label: 'Projects' },
        { id: 'CTF', label: 'Blogs' },
        { id: 'Competitions', label: 'Competitions' },
        { id: 'Contact', label: 'Contact' },
    ];

    const handleNavClick = (e, sectionId) => {
        if (isOnPortfolio) {
            e.preventDefault();
            const el = sectionId === 'home' ? document.getElementById('home') : document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <ul className="navigationbar">
            {navItems.map((item) => (
                item.isTitle ? (
                    <li key={item.id} className="Nav_T">
                        <Link to="/" state={{ scrollTo: item.id }} onClick={(e) => handleNavClick(e, item.id)}>
                            {item.label}
                        </Link>
                    </li>
                ) : (
                    <li key={item.id} className="Nav_B">
                        <Link to="/" state={{ scrollTo: item.id }} onClick={(e) => handleNavClick(e, item.id)}>
                            {item.label}
                        </Link>
                    </li>
                )
            ))}
        </ul>
    );
}

export default TopNavigation