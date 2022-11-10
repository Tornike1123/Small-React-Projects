import React from "react";
import ClassClick from "./welcome/ClassClick";
import Counter from "./welcome/Counter";
import FunctionClick from "./welcome/FunctionClick";
import Greet from "./welcome/Greet";
import Message from "./welcome/Message";
import Welcome from "./welcome/Welcome";

function App() {
	return (
		<div>
			<ClassClick />
			<FunctionClick />
			<Welcome name="jonh" heroName="Super Man" />
			<Counter />
			<Message />
			<Greet name="Tornike" heroName="Capitan America" />
		</div>
	);
}

export default App;
