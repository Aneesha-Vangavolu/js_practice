import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons';
import './settingsicon.css';



function Settingicon() {
  const [isOpen,setIsopen]=useState(false);
  const click_setting=()=>{
    setIsopen(!isOpen)
  }
  const dropdown_icon=(option)=>{
    console.log(option)
    setIsopen(false)
  }

  return (
    <div className='settings_icon' onClick={click_setting}>
        <FontAwesomeIcon icon={faBars} style={{color: "white"}}/>
        {isOpen && (
          <div className='dropdown_menu'>
          <div className='dropdown_option' onClick={() => dropdown_icon('ftoc')}>
              Fahrenheit to Celsius
          </div>
          <div className='dropdown_option' onClick={() => dropdown_icon('ctof')}>
              Celsius to Fahrenheit
          </div>
      </div>

        )}
             </div>
  )
}

export default Settingicon;