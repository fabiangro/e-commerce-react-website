import React, { useEffect, useState } from 'react'
import Products from '../components/Products'
import { useLoaderData } from 'react-router-dom';


const Home = () => {
	const [products, setProducts] = useState([]);
	const {data} = useLoaderData();
	
	useEffect( ()=>{
		setProducts(data);
	}, [data])

  return (
	<div>
		<Products products={products}/>
	</div>
  )
}

export default Home