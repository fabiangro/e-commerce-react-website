import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import CartItems from '../components/CartItems';
import { createOrder } from '../redux/apiCalls';
import { clearCart } from '../redux/cartRedux';

const Line = styled.div`
	width: 100%;
	height: 120px;
	opacity: 1;
    background-color: rgba(253, 187, 116, 0.884);
`

const Container = styled.div`
	max-width: 1280px;
	margin-left: auto;
    margin-right: auto;
	padding-top: 80px;
    padding-bottom: 80px;
	display: flex;
`
const Totals = styled.div`
	width: 33.33333%;
	background-color: rgba(181, 224, 235, 0.79);
	padding-top: 12px;
    padding-bottom: 24px;
	padding-left: 16px;
	padding-right: 16px;
	border-radius: 20px;

`;

const TotalsText = styled.h2`
	font-size: 28px;
    line-height: 32px;
	font-weight: 500;
`

const TotalSum = styled.span`
	font-size: 20px;
    line-height: 28px;
	font-weight: 400;
`

const OrderButton = styled.button`
	color: white;
	width: 100%;
	padding-top: 12px;
	transition-duration: 300ms;
	padding-bottom: 12px;
	font-size: 100%;
	margin-top: 24px;
	border: none;
	cursor: pointer;
	background-color: black;
	&:hover {
		background-color: rgba(135, 186, 207, 0.79);
	}
`

const Cart = () => {
	const cart = useSelector( (state) => state.cart);
	const user = useSelector( (state) => state.user.currentUser);
	const dispatch = useDispatch();

	const handleOrder = ()=> {
		createOrder(user, cart.products);
		dispatch(clearCart());
	}

  return (
	<div>
      <Line/>
      <Container>
        <CartItems/>
        <Totals>
            <TotalsText>Summary</TotalsText>
          <TotalSum>Total {cart.total.toFixed(2)} PLN</TotalSum>
          <OrderButton onClick={handleOrder} disabled={! user}>
            {!user? 'sign in to order' : 'order'}
          </OrderButton>
        </Totals>
      </Container>
    </div>
  )
}

export default Cart