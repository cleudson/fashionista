import React from 'react';
import CartItem from '../../components/CartItem';

const Cart = ({list}) => {
    const cartList = Object.entries(list);
    const products = cartList.map(item => item[1]);
    return (
        <>
        { products.length ?
            products?.map((item, index) => (
                <CartItem item={item} key={cartList[index][0]}>teste</CartItem>
            ))
            :
            <div>Seu carrinho está vazinho</div>
        }
        </>
    )
}


export default Cart;