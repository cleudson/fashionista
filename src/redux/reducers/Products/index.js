
import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
      loading: 'idle',
      list: [],
      current:{}
    },
    reducers: {
      listLoading: state => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      },
      listReceived: (state, action) => {       
        if (state.loading === 'pending') {
          state.loading = 'idle'
          state.list = action.payload;
        }
      },
      setCurrent: (state, action) => {
        state.current = action.payload;
      }
    }
  })
  
  // Destructure and export the plain action creators
  export const { listLoading, listReceived, setCurrent } = productsSlice.actions
  
  // Define a thunk that dispatches those action creators
  export const fetchList = api => async dispatch => {
    dispatch(listLoading())
    const response = await fetch(api);
    const data = await response.json();
    const list= data.map( item => {
      item.isPromo = item.regular_price !== item.actual_price;
      item.image = item.image || process.env.PUBLIC_URL + 'product-placeholder.png';
      return item;
    });
    dispatch(listReceived(list));
  }

export const selectLoading = state => state.products.loading;
export const selectList = state => state.products.list;
export const selectCurrent = state => state.products.current;
export default productsSlice.reducer;