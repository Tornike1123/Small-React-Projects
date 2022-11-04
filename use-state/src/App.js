import React, { useState } from "react";

function App() {
	const [count, setCount] = useState(4);

	const decrementCount = () => {
		setCount(count - 1);
	};

	const incrementCount = () => {
		setCount(count + 1);
	};

	return (
		<>
			<button onClick={decrementCount}>-</button>
			<span>{count}</span>
			<button onClick={incrementCount}>+ </button>
		</>
	);
}

export default App;
