import Root from './Root.jsx'
import Start from './pages/Start.jsx'
import About from './pages/About.jsx'

// Lista med alla route-objekt. De avgör vilka komponenter som ska visas, beroende på URL:en. (Bättre att ha i en egen fil, än att ha i main.jsx)
export const routes = [
	{
		path: '/',
		Component: Root,
		children: [
			{ path: '/', Component: Start },
			{ path: '/about', Component: About },
		]
	}
]
