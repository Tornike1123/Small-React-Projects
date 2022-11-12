import React from "react";

function NameList() {
	const names = ["Bruce", "Clark", "Diana"];
	return (
		<div>
			{names.map((name) => (
				<h1>{name}</h1>
			))}
		</div>
	);
}

export default NameList;
