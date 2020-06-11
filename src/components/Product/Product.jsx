import React from 'react';
import { Link } from 'react-router-dom';
import { FormatUrl } from '../../services/Format';
import './Product.css';

const Product = ({data}) => {
    const { name, regular_price, actual_price, image, discount_percentage, color_slug, isPromo } = data;
    const friendlyUrl = FormatUrl(name);
    return (
        <Link className="product" to={`/product/${friendlyUrl}/${color_slug}`}>
            <div className="product__img-container">
                <img className="product__img" src={image} alt="" width="470" height="594"/>
                {isPromo &&
                    <aside className="product__seal">-{discount_percentage}</aside>
                }
            </div>
            <footer className="product__footer">
                <h2 className="product__name">{name}</h2>
                <div>
                {isPromo &&
                    <span className="product__price-off">{regular_price}</span>
                }
                    <span className="product__price">{actual_price}</span>
                </div>
            </footer>
        </Link>
    )
}
export default Product;