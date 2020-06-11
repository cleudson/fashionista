
import { createSlice } from '@reduxjs/toolkit';

export const settingsSlicer = createSlice({
    name: 'settings',
    initialState: {
      search: false,
      cart: false,
      offCanvas: false
    },
    reducers: {
      showSearch: (state) => {
        state.search = true;
        state.cart = false;
      },
      showCart: (state) => {
        state.search = false;
        state.cart = true;
      },
      showOffCanvas: (state) => {
        state.offCanvas = true;
      },
      hideOffCanvas: (state) => {
        console.log("state")
        state.offCanvas = false;
      },    
    }
  })
  

export const { showSearch, showCart, showOffCanvas, hideOffCanvas } = settingsSlicer.actions;
export const selectSettings = state => state.settings;
export default settingsSlicer.reducer;