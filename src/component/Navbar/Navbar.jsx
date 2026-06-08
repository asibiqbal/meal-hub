import { useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="nav-container">
            <div className="nav-wrapper">
                <div className="nav-logo">
                    <h1>Meal <span className='logo-text'>Hub</span></h1>
                </div>
                <button className="hamburger" onClick={toggleMenu}>
                    <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                    <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                    <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                </button>
                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="#" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                    <li><a href="#" onClick={() => setIsMenuOpen(false)}>About</a></li>
                    <li><a href="#" onClick={() => setIsMenuOpen(false)}>Contact Us</a></li>
                    <li><a href="#" onClick={() => setIsMenuOpen(false)}>Meals</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;