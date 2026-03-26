import Root from './Root.jsx'
import Start from './pages/Start.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Details from './pages/Details.jsx'
import { vegetables } from './data/products.js'

// Lista med alla route-objekt. De avgör vilka komponenter som ska visas, beroende på URL:en. (Bättre att ha i en egen fil, än att ha i main.jsx)
export const routes = [
	{
		path: '/',
		Component: Root,
		children: [
			{ path: '/', Component: Start },
			{ path: '/about', Component: About },

			{
				path: '/products',
				loader: async () => {
					// Eftersom datan finns i en fil, kan vi importera den direkt. Om datan kommer från ett API kan vi använda fetch i stället.
					return vegetables
				},
				Component: Products
			},

			{
				path: '/products/:id',
				loader: async () => vegetables,
				Component: Details
			},
		]
	}
]
