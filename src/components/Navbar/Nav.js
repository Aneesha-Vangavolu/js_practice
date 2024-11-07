import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHouse } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';
import { UserdataContext } from '/Users/abhisha/Desktop/study/react/wheather-project/src/App.js';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const {userdata} = useContext(UserdataContext); // Accessing userdata from context
   // console.log(userdata)
    return (
        
        <div className='Nav'>
            <Link to='/' className='Home'>
                <FontAwesomeIcon icon={faHouse} />
            </Link>
            <div className='Nav-content'>
                <p>{userdata.fullName ? `Welcome ${userdata.fullName} !` : 'Guest'}</p> 
                <FontAwesomeIcon className='Nav-icon' icon={faUser} />
            </div>
        </div>
    );
}

export default Nav;
