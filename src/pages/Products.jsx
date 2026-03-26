import { useLoaderData } from 'react-router'
import './Products.css'

const Products = () => {
	// useLoaderData returnerar data av samma typ som loader-funktionen returnerar
	const vegetables = useLoaderData()

	return (
		<div className="products">
			<h2> Vårt sortiment </h2>
			<div className="product-list">
			{vegetables.map(v => (
				<div key={v.id} className="card">
					<p>{v.name}</p>
					<p>{v.price} kr</p>
				</div>
			))}
			</div>
		</div>
	)
}

export default Products
