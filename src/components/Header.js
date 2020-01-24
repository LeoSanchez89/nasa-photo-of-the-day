import React from "react";
import styled from "styled-components";

const LogoImg = styled.img`
	width:10%;
	margin:.5%;
`;

const HeaderContent = styled.header`
	display: flex;
	flex-direction: row-reverse;
	justify-content: center;
	align-items: center;
	margin-top:-5%;
	margin-bottom: 10%;	
	margin-right:3%;
	-webkit-text-stroke-width: 0.2px;
	-webkit-text-stroke-color: black;
`;


function Header() {
	return (
		<HeaderContent>
			<h1 className="text-danger">Photo of the Day!</h1>
			<LogoImg src = "/img/logo.png"></LogoImg>
		</HeaderContent>
	);
}

export default Header;
