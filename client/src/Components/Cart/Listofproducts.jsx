import React from 'react';

function Listofproducts(props) {
  return (
    <div>
      <h1>Cart</h1>
      {props.list}
    </div>
  );
}

export default Listofproducts;