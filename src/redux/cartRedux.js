import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
	name: "cart",
	initialState: {
		products: [],
		total: 0,
	},

	reducers: {
		// payload: product
		addProduct: (state, action) => {
			const item = state.products.find(
				(item) => item.id === action.payload.id
			);
			if (item) {
				item.quantity += action.payload.quantity;
			} else {
				state.products.push(action.payload)
			}
			state.total += action.payload.price * action.payload.quantity;
		},
		// payload: product id
		removeProduct: (state, action) => {
			const item = state.products.find(
				(item) => item.id === action.payload
			);
			if (item) {
				state.total -= item.price * item.quantity;
				state.products = state.products.filter(
					(item) => item.id !== action.payload
				);
			}
		},
		//payload: product id
		incrementQuantity: (state, action) => {
			const item = state.products.find(
				(item) => item.id === action.payload
			);
			if (item) {
				item.quantity++
				state.total += item.price;
			}
		},
		//payload: product id
		decrementQuantity: (state, action) => {
			const item = state.products.find(
				(item) => item.id === action.payload
			);
			if (item && item.quantity > 1) {
				item.quantity--;
				state.total -= item.price;
			}
		},
		clearCart: (state) => {
			state.products = [];
			state.total = 0;
		},
	}
	}
)


export const { addProduct,
	removeProduct,
	incrementQuantity,
	decrementQuantity,
	clearCart } = cartSlice.actions;

export default cartSlice.reducer;