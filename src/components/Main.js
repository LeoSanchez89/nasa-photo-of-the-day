import React from "react";
import Info from "./Info";
import styled from "styled-components";

const BgImg = styled.img`
	width: 100%;
	border-radius: 2%;
`;

const ConstContainer = styled.section`
	margin: 1.5%;
	box-sizing: border-box;
	position: relative;
`;

const Main = props => {
	return (
		<ConstContainer>
			<BgImg src={props.image}></BgImg>
			<Info
				title={props.title}
				date={props.date}
				desc={props.desc}
				credit={props.credit}
			/>
		</ConstContainer>
	);
};

export default Main;
