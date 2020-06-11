import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import Routes from './routes';
import Api from './services/Api';
import OffCanvas from './containers/OffCanvas';
import Topbar from './containers/Topbar';
import { fetchList } from './redux/reducers/Products';
import { useSelector } from 'react-redux';
import { selectSettings } from './redux/reducers/Settings';
// TO DO: colocar selectors num unico arquivo

function App() {
  const dispatch = useDispatch();
  const settings = useSelector(selectSettings);
  useEffect(() => {
    dispatch(fetchList(Api))
  },[dispatch]);
  return (
  <Router>
    <div className="container">
      <Topbar/>
    </div>
    <div className={`overlay ${settings.offCanvas ? 'overlay--show' : '' }`}>
      <OffCanvas/>
    </div>
    <div className="container">
      <Routes />
    </div>
  </Router>
  );
}

export default App;
    

