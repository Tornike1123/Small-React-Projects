import React from "react";
import Person from "./Person";

function NameList() {
	const persons = [
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

	const personList = persons.map((pers) => <Person human={pers} />);
	return <div>{personList}</div>;
}

export default NameList;
