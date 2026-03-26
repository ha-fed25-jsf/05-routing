import { Outlet, NavLink } from 'react-router'
import './Root.css'

// Första komponenten som routas - visas alltid. Se routes.jsx
// Outlet innehåller den "child route" som matchar URL bäst.
function Root() {

	return (
		<div className="app">
			<header>
				<h1> 🥬Grönsakerna🥬 </h1>
				<nav className="row nav-links">
					<NavLink to="/"> Start </NavLink>
					<NavLink to="/about"> Om oss </NavLink>
					<NavLink to="/products"> Varor </NavLink>
				</nav>
			</header>

			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default Root
