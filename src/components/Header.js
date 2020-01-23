import React from "react";
import styled from "styled-components";

const LogoImg = styled.img`
	width:8%;
`;

const HeaderContent = styled.header`
	display: flex;
	flex-direction: row-reverse;
	justify-content: center;
	align-items:center;
	margin-bottom: -2%;
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
