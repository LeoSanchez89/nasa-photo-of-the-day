import React from "react";
import Info from "./Info";

const Main = props => {
	return (
		<section>
			<img src={props.image}></img>
            <Info
                title={props.title}
                date={props.date}
                desc={props.desc}
                credit={props.credit}
            />
		</section>
	);
};

export default Main;
