import React from 'react'
import styled from 'styled-components'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/cartRedux';
import { publicRequest } from '../requests';



const Icon = styled.div`
  width: 40px;
  height: 40px;
  z-index: 19;
  border-radius: 50%;
  background-color: white;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  position: absolute;
  top: 10px;
  right: 10px;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Icon2 = styled.div`
  width: 40px;
  height: 40px;
  z-index: 19;
  border-radius: 50%;
  background-color: white;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  position: absolute;
  top: 10px;
  left: 10px;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;


const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 400px; 
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5fbfd;
  position: relative;
`;

const Image = styled.img`
  flex: 1;
  width: 100%;
  height: auto;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.678);
  color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductName = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

const ProductPrice = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

const Product = ({ item }) => {
  const {currentUser} = useSelector((state)=>state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
		dispatch(addProduct({
			id: item.id,
			name: item.name,
			desc: item.desc,
			price: item.price,
			image: item.image,
			quantity: 1,
		}));
	}

  const handleRemove = () => {
    publicRequest.delete(`/products/${item.id}`);
    window.location.reload(false);
  }

  const handleAdminRemove = () => {
    if (currentUser && currentUser.admin) {
      return (
        <Icon2 onClick={handleRemove}>
          USUN
        </Icon2>
      )
    }
  }
	return (
	  <Container>
      {handleAdminRemove()}
		<Icon onClick={handleAddToCart}>
		  <AddShoppingCartIcon />
		</Icon>
		<Link to={`/product/${item.id}`}>
			<Image src={item.image} />
		</Link>
		<Overlay>
		  <ProductName>{item.name}</ProductName>
		  <ProductPrice>{item.price.toFixed(2)} PLN</ProductPrice>
		</Overlay>
	  </Container>
	);
  };


export default Product