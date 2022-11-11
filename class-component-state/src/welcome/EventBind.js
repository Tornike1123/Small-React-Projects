import React, { Component } from "react";

class EventBind extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: "Hello",
		};

		//The Best option with event binding (version1)
		this.changeText = this.changeText.bind(this);
	}
	//version1
	changeText() {
		this.setState({
			message: "GoodBye",
		});
	}

	//version2
	BackChangeText = () => {
		this.setState({
			message: "Hello",
		});
	};

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
