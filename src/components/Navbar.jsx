import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from "react-router-dom";
import { logOut } from '../redux/userRedux';



const NavbarContainer = styled.div`
	position: sticky;
	top: 0px;
	z-index: 50;
	background-color: rgba(210, 230, 225);
`

const Container = styled.div`
	height: 80px;
	background-color: rgba(210, 230, 225);

`;
const Wrapper = styled.div`
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Line = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;


const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	background-color: white;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5x;
`;

const Input = styled.input`
	border: none;
`

const Logo = styled.h1`
	font-weight: bold;
`

const Left = styled.div`
	flex:1;
	display: flex;
	align-items:center;
`

const Center = styled.div`
	flex: 1;
	text-align: center;
`

const Right = styled.div`
	flex:1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`

const MenuItem = styled.div`
	font-size: 20px;
	cursor: pointer;
	margin-right: 25px;
`


const Navbar = () => {
	const cartItems = useSelector(state => state.cart.products.length);
	const {currentUser} = useSelector((state)=>state.user)
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogOut= async (e)=>{
		e.preventDefault();
		dispatch(logOut());
		navigate("/");
	}

  return (
	<NavbarContainer>
		<Container>
		<Wrapper>
		<Left>
			<SearchContainer>
				<Input placeholder='Search'/>
				<SearchIcon style={{color:"gray"}}/>
			</SearchContainer>
		</Left>
		<Center>
			<Link to={"/"}>
				<Logo>E-commerce</Logo>
			</Link>
		</Center>
		<Right>
			<Link to={"/register"}>
				<MenuItem>Register</MenuItem>
			</Link>
			{!currentUser &&
				<Link to={"/login"}>
					<MenuItem>Sign in</MenuItem>
				</Link>
			}
			{currentUser &&
				<MenuItem onClick={handleLogOut}>Sign out</MenuItem>
			}
			<MenuItem>
			<Link to={"/cart"}>
				<Badge badgeContent={cartItems} color="secondary">
					<ShoppingCartIcon color="action" />
				</Badge>
			</Link>
			</MenuItem>
		</Right>
		</Wrapper>
	</Container>
	<Line/>

	</NavbarContainer>
  )
}

export default Navbar