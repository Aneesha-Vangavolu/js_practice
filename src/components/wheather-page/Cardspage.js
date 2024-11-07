import React from 'react'
import Cards from './Cards';
import './cards.css';

function Cardspage() {
  return (      
           <div className='container'>
                 
                 <Cards isButtonVisible={false} />  {/* First card */}
                  <Cards isButtonVisible={true} /> {/* Second card with button instead of temp */}
                  <Cards isButtonVisible={false} />  {/* Third card */}
          
          </div>   
      
  )
}

export default Cardspage;