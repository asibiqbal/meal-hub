import './navbar.css';
const Navbar = () => {
    return (
        <div className="nav-container">
            <div>
                <h1>Meal <span className='logo-text'>Hub</span></h1>
            </div>
            <ul className='nav-menu'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Meals</a></li>
            </ul>
        </div>
    );
};

export default Navbar;