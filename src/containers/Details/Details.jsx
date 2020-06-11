import React from 'react';
import ProductDetails from '../../components/Details';
import { useSelector } from 'react-redux';
import { selectCurrent } from '../../redux/reducers/Products';


const Details = () =>{
    const product = useSelector(selectCurrent);
    return (    
        <ProductDetails product={product}/>
    )
}

export default Details