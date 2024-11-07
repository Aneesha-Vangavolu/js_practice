import React from 'react';
import './cards.css';
import Settingicon from './Settingicon';
import city_details from '../data/citydata.js'; 

function Card1(){
    

    city_details.forEach(detail => {
        console.log(detail.city); // This will log the name of each city (10 cities in total)
    });

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
                             27&deg;C
                             </div>
                </div> );
            }) }
     </div>
  );
}

export default function Cards() {
  return (
    
     <div className='container'>
           
    <Card1/>
    <Card1/>
    <Card1/>
    
    </div>
    
  );
}
