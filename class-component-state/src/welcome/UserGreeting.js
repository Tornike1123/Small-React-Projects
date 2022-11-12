import React, { Component } from "react";

class UserGreeting extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: false,
		};
	}
	render() {
		//**Conditional Rendering - Ternary Operators
		return this.state.isLoggedIn ? (
			<div>Hello John</div>
		) : (
			<div>Hello Guest</div>
		);
	}
}

export default UserGreeting;
