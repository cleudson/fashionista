import React from 'react';
import Product from '../../components/Product';
import './Catalog.css';

const Catalog = ({data = []}) => {
  return (
  <>
    <div className="catalog__info">{data.length} items</div>
    <div className="catalog__list">
      {
        data.map((product, key) => (
          <Product key={key} data={product}/>
        ))
      }
    </div>
  </>
  )
}
export default Catalog;
