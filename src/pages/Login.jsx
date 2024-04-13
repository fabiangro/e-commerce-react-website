import React, { useState } from 'react'
import styled from 'styled-components'
import { login } from '../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'


const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(214, 243, 234, 0.82), rgba(16, 139, 180, 0.5));
	display: flex;
	align-items: center;
	justify-content: center;
`

const Wrapper = styled.div`
	width: 25%;
	padding: 20px;
	background-color: #ffffffc3;
`

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`

const Form = styled.form`
	display: flex;
	flex-direction: column;
`

const Input = styled.input`

	min-width:40%;
	margin: 10px 0px;
	padding: 10px;
`


const Button = styled.button`
	border: none;
	margin-bottom: 10px;
	margin-top: 10px;
	padding: 10px;
	background-color: teal;
	cursor: pointer;
	color: white;
	transition: 300ms;
	&:hover {
		background-color: #006666;
	}
	&:disabled{
		color: #006666;
		cursor: not-allowed;
	}
`

const MyLink = styled.a`
	margin: 10px 0px;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`
const ErrorMsg = styled.span`
	color: red;
`


const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const {currentUser, isFetching, error} = useSelector((state)=>state.user)

	const dispatch = useDispatch();

	const handleLogin = (e)=>{
		e.preventDefault();
		login(dispatch, {username:username, password:password});
	}

  return (
	<Container>
		<Wrapper>
			{currentUser && (
				<Navigate to="/"/>
			)}
			<Title>Sign in</Title>
			<Form>
				<Input
					placeholder="username/e-mail"
					onChange={(e) => setUsername(e.target.value)}
				/>
				<Input
					placeholder="password"
					type='password'
					onChange={(e) => setPassword(e.target.value)}
					/>
				<Button onClick={handleLogin} disabled={isFetching}>Log in</Button>
				{error && <ErrorMsg>Incorrect username or passowrd</ErrorMsg>}
				<MyLink>I do not remember my passowrd</MyLink>
				<Link to={"/register"}>
					<MyLink>Create a new account</MyLink>
				</Link>
			</Form>
		</Wrapper>
	</Container>
  )
}

export default Login