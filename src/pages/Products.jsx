import { useState, useMemo } from 'react'
import { useLoaderData } from 'react-router'
import './Products.css'
import ProductItem from '../components/ProductItem'
import { fuzzyMatch } from '../data/utils.js'
import { useStore } from '../data/store.js'

const Products = () => {
	/* Hämta data alterantiv 1: använd loader-funktion i router-konfigurationen
	// useLoaderData returnerar data av samma typ som loader-funktionen returnerar
	const vegetables = useLoaderData()
	*/
	// Alternativ 2: lagra datan i store, använd selector-funktion för att hämta ut den
	const vegetables = useStore(state => state.vegetables)
	const [searchText, setSearchText] = useState('')

	// Enkel sökning
	// const calculateValue = () => searchText === '' ? vegetables : vegetables.filter(v => match(searchText, v.name))
	const calculateValue  =() => searchText === '' ? vegetables : fuzzyMatch(searchText)

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
