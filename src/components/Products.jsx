import styled from 'styled-components'
import Product from './Product';

const Container = styled.div`
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;


const Products = ({products}) => {
  return (
	<Container>
		{products.map((item) => (
			<Product item={item} key={item.id}/>
		))}
	</Container>
  )
}

export default Products