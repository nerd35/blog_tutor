import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
 
const Logo = (props) => {
  return (
    <div className="logo">
      <NavLink to="/"> Umukoro's Blog</NavLink>
    </div>
  );
}
 
export default Logo;