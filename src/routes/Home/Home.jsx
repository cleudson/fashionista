import React  from 'react';
import Catalog from '../../containers/Catalog';
import { useSelector } from 'react-redux';
import { selectList } from '../../redux/reducers/Products';

const Home = () => {
  const list = useSelector(selectList);
  return (
    <Catalog data={list}/>
  )
}
    
export default Home;