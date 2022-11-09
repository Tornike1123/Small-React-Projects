import React, { Component } from "react";
import "./counter.css";

class Counter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}

	increment() {
		this.setState(
			{
				count: this.state.count + 1,
			},
			() => alert(this.state.count)
		);
	}

	decrement() {
		this.setState(
			{
				count: this.state.count - 1,
			},
			() => alert(this.state.count)
		);
	}

	render() {
		return (
			<div className="flex">
				<button onClick={() => this.decrement()}>-</button>
				<h1>{this.state.count}</h1>
				<button onClick={() => this.increment()}>+</button>
			</div>
		);
	}
}

export default Counter;
