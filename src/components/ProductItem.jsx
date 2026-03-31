import { Link } from "react-router"

const ProductItem = ({ vegetable }) => (
	<div className="product-item card">
		<p>{vegetable.name}</p>
		<p>{vegetable.price} kr</p>
		<p> {vegetable.blurb} </p>
		<Link to={'/products/' + vegetable.id}> Läs mer... </Link>
	</div>
)

export default ProductItem
