import React from 'react';
import './Item.css';

const item = (props) => {
  const handleFav=(e)=>{
    e.preventDefault();
    props.toggleFavourites();
  }

  const handleCart=(e)=>{
    e.preventDefault();
    props.toggleCart();
  }

  return (
    <div className='Item'>
      <div>
        <img src={props.image} alt='' />
        <p></p>
        <div className='Description'>
          <p>{props.description}</p>
        </div>
        <div className='Link'>
          <h3>${props.price}</h3>
          <a href='/' className='Fav' onClick={handleFav}>
            {!props.inFavorites ? 'Add to Favourites' : 'In Favourites'}
          </a>
          <a
            href='/'
            className='Shopping-cart'
            onClick={handleCart}
          >
            {!props.inCart ? 'Add To Cart' : 'In Cart'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default item;
