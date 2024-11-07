import './App.css';
import Nav from './components/Navbar/Nav.js';
import { useState,createContext } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Loginsignup from './components/login-signup/login-signup.js'; // Adjust the import path accordingly

export const UserdataContext=createContext();

function App() {

    const [userdata,setUserdata]=useState({fullName:'',email:'',password:''})
    
        return (
            <UserdataContext.Provider value={{ userdata, setUserdata }}>
                <Nav /> {/* Now Nav has access to UserdataContext */}
                <Loginsignup />
            </UserdataContext.Provider>
        );
    }

export default App;
