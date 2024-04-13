import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(214, 243, 234, 0.82), rgba(16, 139, 180, 0.5));
	display: flex;
	align-items: center;
	justify-content: center;
`

const Wrapper = styled.div`
	width: 40%;
	padding: 20px;
	background-color: #ffffffc3;
`

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`

const Input = styled.input`
	flex: 1;
	max-width: 40%;
	min-width:40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`


const Button = styled.button`
	border: none;
	margin-top: 10px;
	padding: 15px 20px;
	background-color: teal;
	cursor: pointer;
	color: white;
	transition: 300ms;
	&:hover {
		background-color: #006666;
	}
`
// const aButton = styled.button`
//   flex:1;
//   max-width: 40%;
//   padding: 15px;
//   border: 2px solid teal;
//   background-color: white;
//   cursor: pointer;
//   font-weight: 500;

//   &:hover {
//     background-color: #f8f4f4;
//   }
// `;


const Register = () => {
  return (
	<Container>
		<Wrapper>
			<Title>Create new account</Title>
			<Form>
				<Input placeholder="username"/>
				<Input placeholder="email"/>
				<Input placeholder="password"/>
				<Input placeholder="confirm password"/>
				<Button>Create</Button>
			</Form>
		</Wrapper>
	</Container>
  )
}

export default Register