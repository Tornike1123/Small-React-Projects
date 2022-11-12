import React from "react";

const Person = ({ human }) => {
	return (
		<div>
			<h1>
				I am {human.name}, my age is {human.age} and my skill is
				{human.skill}...
			</h1>
		</div>
	);
};

export default Person;
