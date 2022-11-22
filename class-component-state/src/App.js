import React from "react";
import "./App.css";
import ParentComponent from "./ParentComponent";
import ClassClick from "./welcome/ClassClick";
import Counter from "./welcome/Counter";
import EventBind from "./welcome/EventBind";
import FunctionClick from "./welcome/FunctionClick";
import Greet from "./welcome/Greet";
import Message from "./welcome/Message";
import NameList from "./welcome/NameList";
import UserGreeting from "./welcome/UserGreeting";
import Welcome from "./welcome/Welcome";
import Stylesheet from "./welcome/Stylesheet";

function App() {
	return (
		<div className="center">
			<Stylesheet primary={true} />
			{/*<UserGreeting />
			<ParentComponent />
			<EventBind /> 
			<ClassClick />
			<FunctionClick />
			<Welcome name="jonh" heroName="Super Man" />
			<Counter />
			<Message />
			<Greet name="Tornike" heroName="Capitan America" /> 
			<NameList />
			*/}
		</div>
	);
}

export default App;
