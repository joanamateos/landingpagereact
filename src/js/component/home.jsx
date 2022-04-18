import React from "react";
import { Navbar } from "/workspace/react-hello/src/js/component/navbar.jsx";
import { Jumbotron } from "/workspace/react-hello/src/js/component/jumbotron.jsx";
import { Card } from "/workspace/react-hello/src/js/component/card.jsx";
import { Footer } from "/workspace/react-hello/src/js/component/footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<Card />
			<Footer />
		</div>
	);
};

export default Home;
