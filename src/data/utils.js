// Används av Products.jsx
// Vi flyttar ut den för att komponenten ska bli mindre
const match = (needle, haystack) => {
	// returnerar true om texten matchar
	return haystack.toLowerCase().includes( needle.toLowerCase() )
}

export { match }
