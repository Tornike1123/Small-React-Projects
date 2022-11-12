import React, { Component } from "react";

class UserGreeting extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: false,
		};
	}
	render() {
		if (this.state.isLoggedIn) {
			return <h1>Hello John</h1>;
		} else {
			return <h1>Hello Guest</h1>;
		}
	}
}

export default UserGreeting;
