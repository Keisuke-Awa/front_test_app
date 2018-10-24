import React, { Component } from 'react';
import axios from 'axios';
import update from 'react-addons-update';

import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

import FormContainer from './FormContainer';
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

  createProduct = (product) => {
    console.log(product);
    axios.post('http://localhost:3001/products', { product })
      .then((response) => {
        const newData = update(this.state.products, { $push: [response.data] });
        this.setState({ products: newData });
      })
      .catch((data) => {
        console.log(data);
      });
  }

  render() {
    return (
      <div className="app-main">
        <FormContainer createProduct={this.createProduct} />
        <ProductsContainer productData={this.state.products} />
      </div>
    );
  }
}

export default MainContainer;
