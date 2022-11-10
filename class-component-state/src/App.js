import React from "react";
import Counter from "./welcome/Counter";
import Greet from "./welcome/Greet";
import Message from "./welcome/Message";
import Welcome from "./welcome/Welcome";

function App() {
	return (
		<div>
			<Counter />
			<Message />
			<Welcome />
			<Greet name="Tornike" heroName="Capitan America" />
		</div>
	);
}

export default App;
