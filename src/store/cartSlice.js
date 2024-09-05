import { createSlice, current } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: 'cart',
  initialState: ({
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
    totalAmount: JSON.parse(localStorage.getItem('cartTotalAmount')) || 0,
  }),
  reducers: {
    addItem: (state, action) => {
      
      state.items.push(action.payload);
      state.totalAmount += action.payload.price;

      localStorage.setItem('cartItems', JSON.stringify(current(state.items)));
      localStorage.setItem('cartTotalAmount', JSON.stringify(state.totalAmount));

    },
    
    clearCart: (state) => {
      state.items.length = 0;
      state.totalAmount = 0;
      localStorage.removeItem('cartItems');
      localStorage.removeItem('cartTotalAmount');
    },
  }
})

export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;