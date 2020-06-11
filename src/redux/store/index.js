import { configureStore } from '@reduxjs/toolkit';
import ProductsReducer from '../reducers/Products';
import CartReducer from '../reducers/Cart';
import SettingsReducer from '../reducers/Settings';

export default configureStore({
  reducer: {
    products: ProductsReducer,
    cart: CartReducer,
    settings: SettingsReducer
  },
});
