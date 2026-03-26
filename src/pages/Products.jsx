import { useLoaderData } from 'react-router'
import './Products.css'
import ProductItem from '../components/ProductItem'

const Products = () => {
	// useLoaderData returnerar data av samma typ som loader-funktionen returnerar
	const vegetables = useLoaderData()

	return (
		<div className="products">
			<h2> Vårt sortiment </h2>
			<div className="product-list">
			{vegetables.map(v => (
				<ProductItem key={v.id} vegetable={v} />
			))}
			</div>
		</div>
	)
}

export default Products
