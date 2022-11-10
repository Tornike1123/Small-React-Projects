import React, { Component } from "react";

class ClassClick extends Component {
	eventHandler() {
		console.log("click meeeee!");
	}
	render() {
		return (
			<div>
				<button onClick={this.eventHandler}>Click Meee!</button>
			</div>
		);
	}
}

export default ClassClick;
