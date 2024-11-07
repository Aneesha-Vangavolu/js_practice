import './App.css';
import Nav from './components/Navbar/Nav.js';
import { useState,createContext } from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Loginsignup from './components/login-signup/login-signup.js'; // Adjust the import path accordingly
import Cardspage from './components/wheather-page/Cardspage.js';
import Main from './components/Main.js';

export const UserdataContext=createContext();

const router = createBrowserRouter([
    {
        path: "/", // Define the root layout route
        element: <Main />, // Use `Main` as the layout
        children: [
            {
                path: "/", // Default route (e.g., login page)
                element: <Loginsignup />
            },
            {
                path: "cards", // Route for the cards page
                element: <Cardspage />
            }
        ]
    }
]);

function App() {

    const [userdata,setUserdata]=useState({fullName:'',email:'',password:''})
    
        return (
            <UserdataContext.Provider value={{ userdata, setUserdata }}>
                
                <RouterProvider router={router}>
               {/* Nav component has access to UserdataContext */}
                
            </RouterProvider>
            </UserdataContext.Provider>
        );
    }

export default App;
