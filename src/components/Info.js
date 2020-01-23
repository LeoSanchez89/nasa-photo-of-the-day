import React, { useState } from "react";
import { Button, Fade } from "reactstrap";
import styled from "styled-components";
import Header from "./Header";

const CenterTxt = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -60%);
	width: 80%;
	font-weight: bold;
	-webkit-text-stroke-width: 0.2px;
	-webkit-text-stroke-color: black;
	text-align:center;
`;

// const AlignHeader = styled.div

const Info = props => {
	const [fadeIn, setFadeIn] = useState(false);

	const toggle = () => setFadeIn(!fadeIn);

	return (
		// <div>
			

		<CenterTxt>
			<Header/>
				<h2 className="text-warning">{props.title}</h2>

				<p className="text-white">Date: {props.date}</p>

				<Button color="danger" size="sm" onClick={toggle}>
					Expand Info
				</Button>

				<Fade in={fadeIn} tag="h5" className="mt-3">
					<p className="text-warning">{props.desc}</p>
					<p className="text-white">Photo Credit: {props.credit}</p>
				</Fade>
			</CenterTxt>
		// </div>
	);
};

export default Info;
