import React, { Component } from "react";

class EventBind extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: "Hello",
		};
	}

	changeText() {
		this.setState({
			message: "Hi!",
		});
	}

	render() {
		return (
			<div>
				<h1>{this.state.message}</h1>
				<button onClick={() => this.changeText()}>Click</button>
			</div>
		);
	}
}

export default EventBind;
