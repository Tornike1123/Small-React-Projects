import React, { Component } from "react";

class UserGreeting extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: true,
		};
	}
	render() {
		//**Conditional Rendering - Short circuit operator
		//! use this approach when u want render something or nothing
		return this.state.isLoggedIn && <div>Hello Jonh</div>;
	}
}

export default UserGreeting;
