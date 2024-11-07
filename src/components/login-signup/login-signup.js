import {React,useState,useContext} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import './login-signup.css';
import { UserdataContext } from '/Users/abhisha/Desktop/study/react/wheather-project/src/App.js';

function Loginsignup(){
    const {userdata, setUserdata } = useContext(UserdataContext);


    let [isSignup,setSignup]=useState(true);// switch login to signup
    
    //Separate Form State: Keep the form input state (formData) separate from userdata.

    const [formData, setFormData] = useState({ fullName: '', email: '', password: '' });  
  // CHnage login to Signup viceversa
    let changeForm=()=>{
        setSignup(!isSignup);
    }
    //update form data based on userdata
    function updateUserData(e){
        const {name,value}=e.target
        setFormData((prevdata)=>(
            {...prevdata,[name]:value
        }))
    }

    function handleForm(){
            const { fullName, email, password } = formData;
    
            // Step 1: Retrieve the existing users from localStorage
            let users = JSON.parse(localStorage.getItem('users')) || [];
    
            // Signup logic
            if (isSignup) {
                if (fullName && email && password) {
                    // Check if user already exists
                    const userExists = users.some(user => user.email === email);
                    if (userExists) {
                        alert('User already exists with this email!');
                        return;
                    }
    
                    // Step 2: Add new user to the users array
                    users.push(formData);
    
                    // Step 3: Store updated array back to localStorage
                    localStorage.setItem('users', JSON.stringify(users));
                    alert('User signed up successfully!');
                } else {
                    alert('Please fill in all the fields for signup.');
                }
            } 
            // Login logic
            else {
                // Check if the user exists
                const storedUser = users.find(user => user.email === email && user.password === password);
                console.log('stored user details',storedUser)
                if (storedUser) {
                    alert(`Login successful! ${storedUser.fullName}!`);
                    console.log(storedUser.fullName)
                    setUserdata(storedUser);
                } else {
                    alert('Invalid email or password.');
                }
            }
        };
    
    

    return (
     
        <div className='Container'>
            <div className='Header'>
                <div className='Text'>{isSignup?'Signup':'Login'}</div>
                <div className='Underline'></div>
            </div>
            <div className='Input-box'>

            {isSignup && (<div className='input'>
            <FontAwesomeIcon className='input-icon' icon={faUser} style={{color: "#370861",}} />
                <input type='text' placeholder='Full Name' name='fullName' value={formData.fullName} onChange={updateUserData}/>
            </div>)}
            <div className='input'>
                <FontAwesomeIcon className='input-icon' icon={faEnvelope} style={{color: "#370861",}} />
                <input type='email' placeholder='Email@gmail.com' name='email' value={formData.email} onChange={updateUserData}/>
            </div>
            <div className='input'>
            <FontAwesomeIcon className='input-icon' icon={faLock} style={{color: "#370861",}} />
                <input type='password' placeholder='Password' name='password' value={formData.password} onChange={updateUserData}/>
            </div>
            
            <div className='Forget-password'>Forget Password? 
                <a href='/'> click here</a>
            </div>
            <div className='Submit-container'>
                <div className='Submit' onClick={changeForm}>
                     {isSignup ? ' Login' : ' Signup'}
                </div>
                <div className='Submit' onClick={handleForm}>
                    {isSignup ? 'Sign Up' : 'Login'}
                     </div>
            </div>
        </div>
        </div>
      
    );

}
export default Loginsignup;