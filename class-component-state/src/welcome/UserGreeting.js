import React, { Component } from "react";

class UserGreeting extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: false,
		};
	}

	//**Conditional Rendering - Element Variables

	render() {
		let message;
		if (this.state.isLoggedIn) {
			message = <div>Hello John</div>;
		} else {
			message = <div>Hello Guest</div>;
		}
		return <div>{message}</div>;
	}
}

export default UserGreeting;
