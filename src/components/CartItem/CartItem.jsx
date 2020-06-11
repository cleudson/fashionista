import React from 'react';
import { includeSize, excludeProduct, excludeSize } from '../../redux/reducers/Cart';
import { useDispatch } from 'react-redux';
import './CartItem.css';

const CartItem = ({item}) =>{
    const {style, name, color, actual_price, sizes, installments, image} = item;
    const dispatch = useDispatch();
    const sizeInclusion = (size) => { dispatch(includeSize({ style, size })) };
    const sizeRemoval = (size) => { dispatch(excludeSize({ style, size })) };
    const productRemoval = () => { dispatch(excludeProduct({ style })) };
    return(
        <aside className="cart-item">
            <header className="cart-item__header">
                <h3>{name}</h3>
                <p>{color.toLowerCase()}</p>
            </header>
            
            <main className="cart-item__main">
                <img src={image} alt="" width="141" height="178" />
            <div>
            {
                Object.entries(sizes).map((size, index) => {
                    return (
                        <div className="cart-item__size" key={index}>
                            <div className="cart-item__size-name">{size[0]}</div>
                            <div className="cart-item__btn-container" >
                                <button onClick={() => {sizeRemoval(size[0])}}>-</button>
                                <span>{size[1]}</span>
                                <button onClick={() => {sizeInclusion(size[0])}}>+</button>
                            </div>
                        </div>
                    )
                })
            }
            
            </div>
            </main>
            <footer>
                <p>{actual_price} - {installments}</p>
                <span className="cart-item__link" onClick={productRemoval}>remover produto</span>
            </footer>
        </aside>
    )
}

export default CartItem;