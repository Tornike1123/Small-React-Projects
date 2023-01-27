import "./App.css";
import { Link } from "react-scroll";

function App() {
	const menuItems = [
		{
			id: 1,
			title: "Home",
		},
		{
			id: 2,
			title: "Portfolio",
		},
		{
			id: 3,
			title: "Contact",
		},
		{
			id: 4,
			title: "About",
		},
	];

	return (
		<div className="App">
			<header>
				<nav>
					<h2>Coffe Shop</h2>
					<ul>
						{menuItems.map((menu) => (
							<li>
								<Link
									to={menu.title}
									smooth={true}
									offset={-435}
									duration={500}
								>
									{menu.title}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</header>

			<main>
				{menuItems.map((menu) => (
					<div className="content">
						<h1 className="content-header" id={menu.title}>
							{menu.title}
						</h1>
					</div>
				))}
			</main>
		</div>
	);
}

export default App;
