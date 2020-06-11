
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      list: {},
    },
    reducers: {
      includeProduct: (state, action) => {
        const newList = {...state.list}
        const { style, name, actual_price, color, size, installments, image } = action.payload;
        if(!newList[style]){
          newList[style] = {
            style,
            name,
            color,
            actual_price,
            installments,
            image,
            sizes:{}
          }
        }
        const sizeAmount = newList[style]['sizes'][size] || 0;
        newList[style]['sizes'][size] = sizeAmount + 1;
        state.list[style] = newList[style]
      },
      excludeProduct: (state, action) => {
        const { style } = action.payload;
        delete state.list[style];
      },
      includeSize: (state, action) => {
        const { style, size } = action.payload;
        state.list[style]['sizes'][size] += 1;
      },
      excludeSize: (state, action) => {
        const { style, size } = action.payload;
        const stateSizes = state.list[style]['sizes'];
        stateSizes[size] -= 1;
        if(stateSizes[size] === 0 ){
          delete stateSizes[size];
        }
        if(!Object.entries(stateSizes).length){
          delete state.list[style];
        }
      }
    }
  })
  

export const { includeProduct, excludeProduct, excludeSize, includeSize } = cartSlice.actions
  
export const selectList = state => state.cart.list;
export default cartSlice.reducer;