import React, { Component } from 'react';
import axios from 'axios';

import ProductsContainer from './ProductsContainer';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/products')
      .then((results) => {
        console.log(results);
        this.setState({ products: results.data });
      })
      .catch((data) => {
        console.log(data);
      });
  }

  render() {
    return (
      <div className="app-main">
        <ProductsContainer productData={ this.state.products } />
      </div>
    );
  }
}

export default MainContainer;
