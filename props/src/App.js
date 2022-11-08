import React from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";

function App() {
	return (
		<div>
			<Greet name="Tornike" heroName="Spider-Man">
				<p>Marvel</p>
			</Greet>
			<Greet name="Giorgi" heroName="Super-Man">
				<button>Click</button>
			</Greet>
			<Greet name="Alex" heroName="Capitan-America">
				<button>Clickkkk</button>
			</Greet>

			<Welcome name="World">
				<p>Welcome</p>
			</Welcome>
		</div>
	);
}

export default App;
