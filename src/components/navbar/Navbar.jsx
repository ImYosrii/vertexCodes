import "./navbar.css";

export default function Navbar() {
    return (
        <div className="navbar">
            <a href="#home"  className="navbar-item">Home</a>
            <a href="#services"  className="navbar-item">Services</a>
            <a href="#about"  className="navbar-item">About Us</a>
            <a href="#contact"  className="navbar-item">Contact Us</a>
        </div>
    )
}