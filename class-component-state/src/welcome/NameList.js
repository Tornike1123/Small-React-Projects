import React from "react";
import Person from "./Person";

function NameList() {
	const names = ["Bruce", "Diana", "Clark", "Bruce"];

	const nameList = names.map((name, index) => <h1 key={index}>{name}</h1>);
	return <div>{nameList}</div>;
}

export default NameList;
