import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#007bff' }}>
            <div className="container">
                <Link className="navbar-brand" to="/" style={{ color: '#00FF00 ', fontWeight: 'bold' }}>CR<span style={{ color: '#0000CD' }}>UD</span> WIS<span style={{ color: '#0000CD' }}>ATA</span> <span style={{ color: 'red' }}>INDO</span><span style={{ color: '#FFFFFF' }}>NESIA</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/" style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about-us" style={{ color: '#FFFFFF' , fontWeight: 'bold'}}>About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact-us" style={{ color: '#FFFFFF' , fontWeight: 'bold'}}>Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/wisatas" style={{ color: '#FFFFFF' , fontWeight: 'bold'}}>Wisata</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/profile" style={{ color: '#0000CD' , fontWeight: 'bold'}}>
                                <FontAwesomeIcon icon={faUser} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
