import React from 'react';
import './OffCanvas.css';
import Cart from '../Cart';
import Search from '../Search';
import { useSelector } from 'react-redux';
import { selectList } from '../../redux/reducers/Cart';
import { selectSettings, hideOffCanvas } from '../../redux/reducers/Settings';
import { useDispatch } from 'react-redux';


const OffCanvas = () =>{
  const list = useSelector(selectList);
  const settings = useSelector(selectSettings);
  const dispatch = useDispatch();
    return (    
      <div className="off-canvas">
        <button onClick={()=>{dispatch(hideOffCanvas())}}>Fechar</button>
        {settings.search &&
          <Search/>
        }
        {settings.cart &&
          <Cart list={list}/>
        }
      </div>
    )
}

export default OffCanvas