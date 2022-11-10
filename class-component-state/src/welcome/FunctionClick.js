import React from "react";

function FunctionClick() {
	const eventHandler = () => {
		console.log("click me");
	};
	return (
		<div>
			<button onClick={eventHandler}>Click me!</button>
		</div>
	);
}

export default FunctionClick;
