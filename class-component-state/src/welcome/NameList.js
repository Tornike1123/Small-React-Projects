import React from "react";

function NameList() {
	const names = ["Bruce", "Clark", "Diana"];
	const nameList = names.map((name) => <h1>{name}</h1>);
	return (
		<div>
			<h1>{nameList}</h1>
		</div>
	);
}

export default NameList;
