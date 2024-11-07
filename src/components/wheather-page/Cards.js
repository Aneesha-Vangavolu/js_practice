import React, { useEffect,useState } from 'react';
import './cards.css';
import Settingicon from './Settingicon';
import city_details from '../data/citydata.js'; 

function Cards({isButtonVisible}){

    const api_key="463b9bd81ac2705c0b298b0d92aa639b"


    city_details.forEach(detail => {
        console.log(detail.city); // This will log the name of each city (10 cities in total)
    });
  
 useEffect(()=>{

    const fetch_api=async() => {
        try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${api_key}`);
        if (!response.ok)
            {
                throw new Error("Data Loading still")
        }
        const data=await response.json();
        console.log(data)
        
        }
        catch (error){
        console.error("There has been Error loading   ",error)
        }

    }
    fetch_api();
    },[])


    return (
         <div className='card'>
        <Settingicon/>
        { city_details.map((item,index)=>{
            return (
                 <div key={index} className="city">
                     <div className="city_image">
                         <img src={item.map} alt='sunshower'></img>
                         </div>
                    <div className="city_name">
                        {item.city}
                        </div>
                        <div className="temp">
                        {isButtonVisible ? (
                                <button className='gragh_button'>Gragh</button> // Show a button in the second card
                            ) : (
                                '27° C' // Show temperature in the other cards
                            )}

                             </div>
                </div> );
            }) }
     </div>
  );
}

export default Cards;
  
