import { useState, useMemo } from 'react'
import { useLoaderData } from 'react-router'
import './Products.css'
import ProductItem from '../components/ProductItem'
import { match } from '../data/utils.js'

const Products = () => {
	// useLoaderData returnerar data av samma typ som loader-funktionen returnerar
	const vegetables = useLoaderData()
	const [searchText, setSearchText] = useState('')

	const calculateValue = () => searchText === '' ? vegetables : vegetables.filter(v => match(searchText, v.name))

	const matchingVeggies = useMemo(
		calculateValue,
		[searchText, vegetables]
	)




	return (
		<div className="products">
			<h2> Vårt sortiment </h2>

			<div className="search">
				<input type="text"
					value={searchText}
					onChange={event => setSearchText(event.target.value)}
					/>
				🔍
			</div>

			<div className="product-list">
			{matchingVeggies.map(v => (
				<ProductItem key={v.id} vegetable={v} />
			))}
			</div>
		</div>
	)
}

export default Products
