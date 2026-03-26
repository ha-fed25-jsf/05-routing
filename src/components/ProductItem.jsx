
const ProductItem = ({ vegetable }) => (
	<div className="product-item card">
		<p>{vegetable.name}</p>
		<p>{vegetable.price} kr</p>
	</div>
)

export default ProductItem
