import React from "react";

const heading = {
	fontSize: "72px",
	backgroundColor: "red",
};

function Inline() {
	return (
		<div>
			<h1 className="error">error</h1>{" "}
			{/* every child component with classnames have inline scope */}
			<h1 style={heading}>Inline</h1>
		</div>
	);
}

export default Inline;
