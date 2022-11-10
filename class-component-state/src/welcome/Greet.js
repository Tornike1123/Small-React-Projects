import React from "react";

const Greet = (props) => {
	const { name, heroName } = props;
	return (
		<div>
			My name is {name}, Super Hero {heroName}
		</div>
	);
};

export default Greet;
