import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import './switcher.scss';

const SwitcherTheme = () => {

   const handleTheme = () => {
        const body = document.body;
    
        if (body.classList.contains('light')) {
          body.classList.replace('light', 'dark');
        } else {
          body.classList.replace('dark', 'light');
        }
        
      }

    return (
      <button className="switcher-button" onClick={handleTheme}>
        <FontAwesomeIcon  className="switcher-button__icon" icon={faMoon} />Dark Mode
      </button>
    )
}

export default SwitcherTheme;
