import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
	const [data, setData] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then((response) => response.json())
			.then((data) => setData(data));
	}, []);

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	const filteredData = data.filter((item) =>
		item.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div>
			<input
				type="text"
				placeholder="Search Todo Items"
				value={searchTerm}
				onChange={handleSearch}
			/>
			<h2>Todo Items</h2>
			{filteredData.map((item) => (
				<p key={item.id}>{item.title}</p>
			))}
		</div>
	);
}
export default App;
