import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Oxana</h1>
      
    </header>
  );
};

const headerStyle = {
  background: '#333',
  color: '#fff',
  padding: '1rem',
  textAlign: 'center',
};

const navStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
};

export default Header;
