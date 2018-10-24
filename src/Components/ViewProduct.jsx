import React from 'react';

class ViewProduct extends React.Component {
  render() {
    return(
      <div>
        <span>{ this.props.data.product }</span>
      </div>
    )
  }
}

export default ViewProduct;
