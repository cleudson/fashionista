import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectList } from '../../redux/reducers/Products';
import { FormatUrl } from '../../services/Format';
import { Link } from 'react-router-dom';
import './Search.css';

const Search = () => {
    const [list, setList] = useState([]);
    const productList = useSelector(selectList);
    // TO DO: Coloca no redux
    const search = (term) => {
        if(term.length > 2){
            const  result =  productList.filter( ({ name }) => (
                name
                .toLowerCase()
                .indexOf(term.toLowerCase()) !== -1
            ));
            setList(result);
        }
        return;
    }
    return(
        <aside class="search">
        <label for="product">Buscar produto</label>
        <input id="product" type="text" onChange={(e) => search(e.target.value)} placeholder="produto"/>
        <div>
            {
                list.map(product => {
                    const { name, actual_price, image, color_slug } = product;
                    const friendlyUrl = FormatUrl(name);
                    return(
                        <Link className="product" to={`/product/${friendlyUrl}/${color_slug}`}>
                            <div className="product__img-container">
                                <img className="product__img" src={image} alt="" width="470" height="594"/>
                            </div>
                            <footer className="product__footer">
                                <h2 className="product__name">{name}</h2>
                                <div>
                                    <span className="product__price">{actual_price} </span>
                                </div>
                            </footer>
                        </Link>
                    )
                })
            }
        </div>
        </aside>
    )
}

export default Search;