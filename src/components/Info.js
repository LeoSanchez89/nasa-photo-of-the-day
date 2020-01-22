import React from "react";

const Info = props => {
	return (
		<div>
			<h2>{props.title}</h2>

			<p>Date: {props.date}</p>
			<div>
				<p>{props.desc}</p>
				<p>Photo Credit: {props.credit}</p>
			</div>
		</div>
	);
};

export default Info;
