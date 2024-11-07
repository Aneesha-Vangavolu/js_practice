import React, { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import './login-signup.css'; 

function Loginsignup() {
    let [isSignup, setSignup] = useState(true); 
    let [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    });

    // Toggle between Signup and Login forms
    let changeForm = () => {
        setSignup(!isSignup); 
    };

    // Update form data based on user input
    let handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission for Signup and Login
    let handleSubmit = () => {
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

            if (storedUser) {
                alert('Login successful!');
            } else {
                alert('Invalid email or password.');
            }
        }
    };

    return (
        <div className='Container'>
            <div className='Header'>
                <div className='Text'>{isSignup ? 'Signup' : 'Login'}</div>
                <div className='Underline'></div>
            </div>
            <div className='Input-box'>
                {/* Show Full Name field only on Signup */}
                {isSignup && (
                    <div className='input'>
                        <FontAwesomeIcon className='input-icon' icon={faUser} style={{ color: '#370861' }} />
                        <input 
                            type='text' 
                            name='fullName' 
                            placeholder='Full Name' 
                            value={formData.fullName} 
                            onChange={handleChange} 
                        />
                    </div>
                )}
                {/* Email input field */}
                <div className='input'>
                    <FontAwesomeIcon className='input-icon' icon={faEnvelope} style={{ color: '#370861' }} />
                    <input 
                        type='email' 
                        name='email' 
                        placeholder='Email@gmail.com' 
                        value={formData.email} 
                        onChange={handleChange} 
                    />
                </div>
                {/* Password input field */}
                <div className='input'>
                    <FontAwesomeIcon className='input-icon' icon={faLock} style={{ color: '#370861' }} />
                    <input 
                        type='password' 
                        name='password' 
                        placeholder='Password' 
                        value={formData.password} 
                        onChange={handleChange} 
                    />
                </div>

                <div className='Forget-password'>
                    Forget Password? 
                    <a href='/'> click here</a>
                </div>
                <div className='Submit-container'>
                    {/* Toggle between Signup and Login */}
                    <div className='Submit' onClick={changeForm}>
                        {isSignup ? ' Login' : ' Signup'}
                    </div>
                    {/* Handle form submission */}
                    <div className='Submit' onClick={handleSubmit}>
                        {isSignup ? 'Sign Up' : 'Login'}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loginsignup;
