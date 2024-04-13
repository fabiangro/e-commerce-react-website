import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import { addProduct } from '../redux/cartRedux';



const Wrapper = styled.div`
padding: 50px;
display: flex;
`;
const ImageContainer = styled.div`
	flex: 1;
	justify-content: center;
	align-items:center;
`;

const Image = styled.img`
width: auto;
height: 70vh;
object-fit: cover;
`;

const InfoContainer = styled.div`
	flex:1;
	padding: 0px 50px;
	align-items: center;
`;

const Title = styled.h1`
	font-weight: 200;
`;

const Desc = styled.p`
	margin:20px 0px;
`;

const Price = styled.span`
	font-weight: 100;
	font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: start;
  gap: 20px;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;


const Button = styled.button`
  flex:1;
  max-width: 40%;
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  transition: 300ms;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const ButtonQ = styled.button`
  	width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  background-color: white;
  cursor: pointer;
  transition: 300ms;
  &:hover{
	background-color: teal;

  };
`

const NotInOfferContainer = styled.div`
  align-items: center;
  font-weight: 700;
  justify-content: center;
  border: 1px solid teal;
  border-radius: 10px;
  width: 33.3333%;
  text-align: center;


`;

const NotInOffer = styled.span`
  padding: 2px;
  margin: 5px 0px 0px 0px;
  font-weight: 600;
`;


const Product = () => {
	const [product, setProduct]	= useState({});
	const [quantity, setQuantity] = useState(1);
	const {data} = useLoaderData();
	const dispatch = useDispatch();

	useEffect(()=>{
		setProduct(data);
	}, [data])

	const handleQuantity = (val) => {
		if (quantity+val > 0) {
			(setQuantity(quantity+val));
		}
	}

	const handleAddToCart = () => {
		dispatch(addProduct({
			id: product.id,
			name: product.name,
			desc: product.desc,
			price: product.price,
			image: product.image,
			quantity: quantity,
		}));
	}

	const isInOffer = ()=>{
		if (product.quantity > 0) {
			return (
				<AddContainer>
				<AmountContainer>
					<ButtonQ>
						<RemoveIcon onClick={()=>handleQuantity(-1)} />
					</ButtonQ>
					<Amount>{quantity}</Amount>
					<ButtonQ>
						<AddIcon onClick={()=>handleQuantity(1)} />
					</ButtonQ>
				</AmountContainer>
				<Button onClick={handleAddToCart}>ADD TO CART</Button>
			</AddContainer>
			)
		} else {
			return (
					<NotInOfferContainer>
						<NotInOffer>
							Currently unavailable
						</NotInOffer>
					</NotInOfferContainer>
			)
		}
	}

  return (
	<Wrapper>
		<ImageContainer>
			<Image src={product.image}/>
		</ImageContainer>
		<InfoContainer>
			<Title>{product.name}</Title>
			<Desc>{product.desc}</Desc>
			<Price>{product.price} PLN</Price>
			{isInOffer()}
		</InfoContainer>
	</Wrapper>
  )
}

export default Product