import React, { Component, Fragment } from 'react';
import Item from '../../components/Item/Item';
import img from '../../assets/images/image1.jpeg';
import Header from '../../components/Header/Header';
import './Shop.css';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: '9d13ce5b-7c23-4bf9-be79-508a4a5b9319',
          description: 'Rustic Wooden Towels',
          image: img,
          price: '188.00',
          inFavorites: false,
          inCart: false,
        },
        {
          id: '308102d1-8b7c-441d-8209-38ba5a829555',
          description: 'Intelligent Metal Gloves',
          image: img,
          price: '641.00',
          inFavorites: false,
          inCart: false,
        },
        {
          id: '63542316-9574-4d0a-b10e-c28cebc3f477',
          description: 'Gorgeous Rubber Pizza',
          image: img,
          price: '1.00',
          inFavorites: false,
          inCart: false,
        },
        {
          id: '1725723f-2c17-4d45-840d-4c3aeca716b9',
          description: 'Ergonomic Metal Chips',
          image: img,
          price: '393.00',
          inFavorites: false,
          inCart: false,
        },
      ],
    };
  }

  handleToggleFavourites = (id) => {
    const update = this.state.products.map((product) => {
      if (product.id === id) {
        return { ...product, inFavorites: !product.inFavorites };
      }
      return product;
    });
    this.setState({ products: update });
  };

  handleToggleCart = (id) => {
    const update = this.state.products.map((product) => {
      if (product.id === id) {
        return { ...product, inCart: !product.inCart };
      }
      return product;
    });
    this.setState({ products: update });
  };

  render() {
    let favs = this.state.products.filter((product) => product.inFavorites)
      .length;
    let cart = this.state.products.filter((product) => product.inCart).length;
    const products = this.state.products.map((product) => (
      <Item
        key={product.id}
        image={product.image}
        description={product.description}
        price={product.price}
        inFavorites={product.inFavorites}
        inCart={product.inCart}
        toggleFavourites={() => this.handleToggleFavourites(product.id)}
        toggleCart={() => this.handleToggleCart(product.id)}
      />
    ));
    return (
      <Fragment>
        <Header favorites={favs} cart={cart} />
        <div className='Shop'>{products}</div>
      </Fragment>
    );
  }
}

export default Shop;
