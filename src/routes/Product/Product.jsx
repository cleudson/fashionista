import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectList, setCurrent } from '../../redux/reducers/Products';
import Details from '../../containers/Details';
import { FormatUrl } from '../../services/Format';

const Product = () => {
    const { slug } = useParams();
    const { colorSlug } = useParams();
    const dispatch = useDispatch();
    const list = useSelector(selectList);
    const productData = list.find(item => FormatUrl(item.name) === slug && item.color_slug === colorSlug);
    dispatch(setCurrent(productData));
    return <Details/>
    //return <div/>
}

export default Product;