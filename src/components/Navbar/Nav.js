import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHouse } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';
import { UserdataContext } from '/Users/abhisha/Desktop/study/react/wheather-project/src/App.js';
import { useContext } from 'react';

function Nav() {
    const {userdata} = useContext(UserdataContext); // Accessing userdata from context
   // console.log(userdata)
    return (
        
        <div className='Nav'>
            <a href='/' className='Home'>
                <FontAwesomeIcon icon={faHouse} />
            </a>
            <div className='Nav-content'>
                <p>{userdata.fullName ? `Welcome ${userdata.fullName} !` : 'Guest'}</p> 
                <FontAwesomeIcon className='Nav-icon' icon={faUser} />
            </div>
        </div>
    );
}

export default Nav;
