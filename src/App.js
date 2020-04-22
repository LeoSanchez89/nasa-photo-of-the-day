import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/Main";
import axios from "axios";
import { Button } from "reactstrap";

function App() {
	const [pics, setPics] = useState([]);
	
	useEffect(() => {
		axios
			.get(
				"https://api.nasa.gov/planetary/apod?api_key=6sB4kv1NcAGeod7XynQfAToMLoWFO6hW0QmYGLnL"
			)
			.then(response => {
				// console.log(response.data);
				setPics(response.data);
			})
			.catch(error => {
				console.log("data was not returned", error);
			});
	}, []);

	 
	function randomDay() {

		axios
			.get(
				"https://api.nasa.gov/planetary/apod?api_key=6sB4kv1NcAGeod7XynQfAToMLoWFO6hW0QmYGLnL&count=1"
			)
			.then(response => {
				// console.log(response.data[0]);
				setPics(response.data[0]);
			})
			.catch(error => {
				console.log("data was not returned", error);
			});
	}

	return (
		<div className="App">
			<Main
				key={pics.hdurl}
				image={pics.url}
				title={pics.title}
				date={pics.date}
				desc={pics.explanation}
				credit={pics.copyright}
			/>
			<Button className="rand" color="danger" size="lg" onClick={() => randomDay()}>Random Day</Button>
		</div>
	);
}

export default App;

