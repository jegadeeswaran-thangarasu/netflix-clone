import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../css/nav.css';
function Nav() {
    const [show , handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }
    useEffect( () => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, []);
    return (
        <div className={`nav ${ show && 'nav-black'}`} >
            <div className='nav-contents'>
                <img onClick={ () => history.push('/')} className='nav-logo' src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='logo' />
                <img 
                    onClick={ () => history.push('/profile')}
                    className='nav-avatar' 
                    src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' 
                    alt='avatar.png'
                />
            </div>
        </div>
    );
}

export default Nav;
