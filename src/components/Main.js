import React from "react";
import Info from "./Info";
import styled from "styled-components";


const BgImg = styled.img`
	width: 100%;
	border-radius: 1%;
	object-fit: scale;
	min-height: 900px;
	max-height:900px;
	
`;

const ConstContainer = styled.section`
	padding: .4%;
	box-sizing: border-box;
	position: relative;
	width: 100%;
	
`;

const Main = props => {
	return (
		<ConstContainer>
			<BgImg className="pic" src={props.image} alt ="Awesome Image of Space"></BgImg>
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
