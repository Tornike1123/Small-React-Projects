import React from "react";
import "./Scroll.css";
import HorizontalScroll from "react-scroll-horizontal";
import bg1 from "../src/images/bg1.jpeg";
import bg2 from "../src/images/bg2.jpeg";
import bg3 from "../src/images/bg3.jpeg";
import bg4 from "../src/images/bg4.webp";

const Bla = () => {
	return (
		<div className="App">
			<HorizontalScroll>
				<div className="main bg">
					<img src={bg1} alt="img" />
				</div>
				<div className="main bg1">
					<img src={bg2} alt="img" />
				</div>
				<div className="main bg2">
					<img src={bg3} alt="img" />
				</div>
				<div className="main bg3">
					<img src={bg4} alt="img" />
				</div>
			</HorizontalScroll>
		</div>
	);
};

export default Bla;
