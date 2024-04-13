import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import ClearIcon from '@mui/icons-material/Clear';
import { decrementQuantity, incrementQuantity, removeProduct } from '../redux/cartRedux';


const Container = styled.div`
	width: 66.66667%;
	padding-right: 40px;
`
const CartHeader = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	background-color: rgb(156, 201, 216);
	padding: 16px 0px 16px 0px;
	border-radius: 20px;

`
const Title = styled.h2`
	font-size: 24px;
	font-weight: 600%;
	margin-left: 5%;
`

const ProductWraper = styled.div`
	border-radius: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 24px;
	margin-top: 24px;
	background-color: rgb(156, 201, 216);
	padding: 16px;
`

const ProductImage = styled.img`
	width: 128px;
	height: 128px;
	object-fit: cover;
	transition: all 0.5s ease;
	&:hover{
		transform: scale(1.1);
  	}
`

const ProductName = styled.p`
	width: 52%;
	font-weight: 500;
`

const Price = styled.p`
	width:20%;
`

const QuantityWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 8px;
`

const QuantityButton = styled.button`
	width: 24px;
	height: 24px;
	font-size: 16px;
	font-weight: 500;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgb(156, 201, 216);
	border: 1px solid rgb(91, 123, 134);
	cursor: pointer;
	transition: background-color 0.3s, color 0.3s;

	&:hover {
		background-color: rgb(82, 113, 124);
		color: white;
	}
`



const CartItems = () => {
	const dispatch = useDispatch();
	const products = useSelector((state)=> state.cart.products);
  return (
	<Container>
		<CartHeader>
			<Title>Your Cart</Title>
		</CartHeader>
		{
			products.map((item)=>
				<ProductWraper key={item.id}>
					<ClearIcon style={{cursor:'pointer'}} onClick = {
						()=>dispatch(removeProduct(item.id))
					}/>
					<ProductImage src={item.image} alt="productImage" />
					<ProductName>{item.name}</ProductName>
					<Price>{item.price.toFixed(2)} PLN</Price>
					<QuantityWrapper>
						<QuantityButton onClick = {
							()=>dispatch(decrementQuantity(item.id))
						}>
							-
						</QuantityButton>
						<span>{item.quantity}</span>
						<QuantityButton onClick={
							()=>dispatch(incrementQuantity(item.id))
						}>
							+
						</QuantityButton>
					</QuantityWrapper>
					<Price>{(item.quantity * item.price).toFixed(2)} PLN</Price>
				</ProductWraper>
				)
		}
	</Container>
  )
}

export default CartItems