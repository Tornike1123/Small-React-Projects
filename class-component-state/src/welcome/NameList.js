import React from "react";

function NameList() {
	const Persons = [
		{
			id: 1,
			name: "Bruce",
			age: 30,
			skill: "SuperMan",
		},
		{
			id: 2,
			name: "Clark",
			age: 31,
			skill: "Spiderman",
		},
		{
			id: 2,
			name: "Diana",
			age: 20,
			skill: "Capitan America",
		},
	];

	const personList = Persons.map((pers) => (
		<h1>
			I am {pers.name}, my age is {pers.age} and my skill is {pers.skill}
		</h1>
	));
	return <div>{personList}</div>;
}

export default NameList;
