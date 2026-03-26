import { useParams, useLoaderData, Link } from "react-router"

const Details = () => {
	// Eftersom det står path: '/products/:id' i routes.jsx,
	// betraktas "id" som en URL-parameter
	// och vi kan hämta den med useParams
	// Men se upp!! Alla URL params är alltid STRÄNGAR
	const { id } = useParams()

	// Alternativ: lägg vegetables i en store (Zustand) och hämta den därifrån
	const vegetables = useLoaderData()

	// Leta upp produkten vi ska visa. Om länken är felaktig, kanske det inte finns någon produkt som matchar. item kan vara UNDEFINED
	const item = vegetables.find(v => v.id === Number(id))
	if( !item ) {
		console.log('Hittade inte produkten. ', id, vegetables)
		// console.log('id har datatypen: ', typeof id)
		// console.log('id2: ', vegetables[2].id)
		return <div className="details"> Kunde inte visa produkten. </div>
	}

	// TODO: backa till listan
	return (
		<div className="details">
			<h3> {item.name} </h3>
			<p> {item.price} kr </p>
			<p> Här skulle mer information om produkten stått... </p>
			<p> TODO: länk som backar tillbaka till produktlistan </p>
			{/* använd navigate(-1) för att backa! */}
		</div>
	)
}

export default Details
