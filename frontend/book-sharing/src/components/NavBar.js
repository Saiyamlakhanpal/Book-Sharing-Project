import React ,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './NavBar.css';

function NavBar() {
    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);
    const closedMobileMenu = () => setClick(false);
    const handleClick = () => setClick(!click);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
        
    }, [])

    window.addEventListener('resize',showButton);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closedMobileMenu}>
                    bookheaven<i class="fas fa-book-open"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={ click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
                   
                    <li>
                    <Link to="/Find" className="nav-links" onClick={closedMobileMenu}>
                            Find a Book
                    </Link>
                    </li>
                    
                    <li>
                    <Link to="/registerBook" className="nav-links" onClick={closedMobileMenu}>
                            Register a new book
                    </Link>
                    </li>
                    <li>
                    <Link to='/' className='nav-links-mobile' onClick={closedMobileMenu}>
                            LOG OUT
                    </Link>  
                    </li>
                    </ul>
                {button && <Button buttonStyle={'btn--outline'}>LOG OUT</Button>}
            </div>
        </nav>
        </>
    )
}

export default NavBar
