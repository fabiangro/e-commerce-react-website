
import { userRequest, publicRequest } from "../requests";
import { loginFailure, loginStart, loginSucces } from "./userRedux"


export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try{
		const {data} = await publicRequest.post("/auth/login", user);
		console.log(data)
		dispatch(loginSucces(data));
	}catch(err){
		dispatch(loginFailure())
	}
}


export const createOrder = async (user, products) => {
	const order = await userRequest.post("/orders/", user);
	const id = order.data.id;
	products.forEach(async item => {
		let order_item = {order: id, product: item.id, quantity: item.quantity};
		await userRequest.post("/orderitems/", order_item);
	})
}
