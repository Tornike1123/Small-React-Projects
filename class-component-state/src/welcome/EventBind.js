import React, { Component } from "react";

class EventBind extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: "Hello",
		};

		//The Best option with event binding
		this.changeText = this.changeText.bind(this);
		this.BackChangeText = this.BackChangeText.bind(this);
	}

	changeText() {
		this.setState({
			message: "GoodBye",
		});
	}

	BackChangeText() {
		this.setState({
			message: "Hello",
		});
	}

	render() {
		return (
			<div>
				<h1>{this.state.message}</h1>
				<button onClick={this.changeText}>Click</button>
				<button onClick={this.BackChangeText}>Change</button>
			</div>
		);
	}
}

export default EventBind;
