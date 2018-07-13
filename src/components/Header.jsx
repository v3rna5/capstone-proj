import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Airbnb</h1>
      <Link to="/">Home</Link> | <Link to="/newproperty">Create Property</Link>
    </div>
  );
}

export default Header;
