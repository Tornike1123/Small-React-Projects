import React, { useEffect, useState } from "react";
import "./Fetch.css";

const Fetch = () => {
	const [data, setData] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/photos")
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
		<div className="center">
			<input
				type="text"
				placeholder="Search"
				value={searchTerm}
				onChange={handleSearch}
			/>
			{filteredData.map((item) => (
				<div>
					<p className="fl" key={item.id}>
						{item.title}
					</p>
					<img src={item.thumbnailUrl} alt="" />
				</div>
			))}
		</div>
	);
};

export default Fetch;
