import React, { Component } from "react";
class Message extends Component {
	constructor() {
		super();

		this.state = {
			message: "Welcome visitor",
			city: "Tbilisi🇬🇪",
		};
	}

	messagehandler() {
		this.setState({
			message: "Thank u",
			city: "Ohio🇺🇸",
		});
	}

	render() {
		return (
			<div>
				<h1>{this.state.message}</h1>
				<h1>{this.state.city}</h1>
				<button onClick={() => this.messagehandler()}>Subscribe</button>
			</div>
		);
	}
}

export default Message;
