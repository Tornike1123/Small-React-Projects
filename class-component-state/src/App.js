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
import Inline from "./welcome/Inline";
import "./appStyles.css";
import style from "./appStyles.module.css";

function App() {
	return (
		<div className="center">
			<h1 className="error">error</h1>
			<h1 className={style.succes}>success</h1>
			<Stylesheet primary={true} />
			<Inline />
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
