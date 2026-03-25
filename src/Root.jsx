import { Outlet, Link } from 'react-router'
import './Root.css'

// Första komponenten som routas - visas alltid. Se routes.jsx
// Outlet innehåller den "child route" som matchar URL bäst.
function Root() {

	return (
		<div className="app">
			<header>
				<h1> 🥬Grönsakerna🥬 </h1>
				<div className="row nav-links">
					<Link to="/"> Start </Link>
					<Link to="/about"> Om oss </Link>

				</div>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default Root
