import React from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";

const App = () => {
	const greeting = "Hello React!";

	return (
		<div>
			<Navbar />
			<h1 className="greeting">{greeting}</h1>
			<p>React is a Javascript library for building user interfaces</p>
			<About />
			<Projects />
		</div>
	);
};

export default App;
