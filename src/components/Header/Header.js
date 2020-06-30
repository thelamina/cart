import React from 'react';
import './Header.css';

const header = (props) => {
  return (
    <div className='Header'>
      <nav>
        <a href='/' className='Logo'>
          Basket
        </a>
        <ul className='NavLinks'>
          <li>
            <a href='/'>Favourites({props.favorites})</a>
          </li>
          <li>
            <a href='/'>
              Cart
              <span role='img' aria-label='Cart'>
                🛒
              </span>
              ({props.cart})
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default header;
