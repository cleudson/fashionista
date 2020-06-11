import React, { useState } from 'react';
import { includeProduct } from '../../redux/reducers/Cart';
import { useDispatch } from 'react-redux';
import './Details.css';


const Details = ({product = {}}) =>{
    const { name, regular_price, actual_price, image, discount_percentage, sizes, isPromo } = product;
    const availableSizes = sizes?.filter(item => item.available);
    const dispatch = useDispatch();
    const [size, setSize] = useState(null);
    return (
        <section className="product-details">
            <div className="product">
                <header className="product__img-container">
                    <img className="product__img" src={image} alt="" width="470" height="594"/>
                    {isPromo &&
                        <aside className="product__seal">-{discount_percentage}</aside>
                    }
                </header>
                <main className="product__footer">
                    <h2 className="product__name">{name}</h2>
                    <div>
                    {isPromo &&
                        <span className="product__price-off">{regular_price} </span>
                    }
                        <span className="product__price">{actual_price}</span>
                    </div>
                </main>
            </div>
            <div className="product__buttons">
                <div>
                {
                    availableSizes?.map(item =>{
                        const { size: availableSize } = item;
                        return  <button className={ size === availableSize ? 'btn-active': null } key={availableSize} onClick={()=>{setSize(availableSize)}}>{availableSize}</button>
                    })
                }
                </div>
                <button disabled={size === null} onClick={()=>{dispatch(includeProduct({size, ...product}))}}>Adicionar ao carrinho</button>
            </div>
        </section>
    )
}

export default Details;