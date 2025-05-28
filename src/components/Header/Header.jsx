import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="header-components">
        <h2>Order Your Favourite Here</h2>
        <p>
          "Explore a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Satisfy your cravings and elevate your dining experience, one delicious meal at a time."
        </p>
        <button className='btn-1'>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
