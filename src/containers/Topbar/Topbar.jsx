import React from 'react';
import Logo from '../../components/Logo';
import { IoMdCart, IoMdSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectSettings, showCart, showOffCanvas, showSearch } from '../../redux/reducers/Settings';
import './Topbar.css';

const Topbar = () => {
    const dispatch = useDispatch();
    const reducers = {
        'cart': showCart,
        'search': showSearch
    }
    const showOverlay = (component = 'cart') =>{
        dispatch(showOffCanvas());
        dispatch(reducers[component]());
    }
    return (
        <header class="topbar">
            <Link to={`/`} class="topbar__name">
                <Logo/>
            </Link>
            <nav>
                <IoMdSearch class="topbar__icon" onClick={() => { showOverlay('search') }}/>
                <IoMdCart class="topbar__icon" onClick={() => { showOverlay('cart') }}/>
            </nav>
        </header>
    )
}

export default Topbar;