import "./App.css";
import React from "react";
import { useState, useEffect } from "react";

function App() {
	const [objects, setObjects] = useState([]);
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/photos")
			.then((response) => response.json())
			.then((data) => setObjects(data));
	}, []);

	const handleLoadMore = () => {
		setOffset(offset + 3);
	};

	const displayedObjects = objects.slice(offset, offset + 3);

	return (
		<div>
			<ul>
				{displayedObjects.map((object) => (
					<div key={object.id}>
						<img src={object.thumbnailUrl} alt="" />
					</div>
				))}
			</ul>
			<button onClick={handleLoadMore}>Watch More</button>
		</div>
	);
}

export default App;
