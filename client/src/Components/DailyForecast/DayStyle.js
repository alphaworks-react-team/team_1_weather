import styled from "styled-components";

export const DayStyle = styled.div`
	height: 100%;
	width: 18%;
	display: flex;
	flex-direction: column;
	align-Items: center;
	justify-content: space-around;
	/* background: rgba(155, 155, 155, 0.25); */
	box-shadow: 0 8px 32px 0 rgba(3, 3, 135, 0.2);
	backdrop-filter: blur(4px);
	-webkit-backdrop-filter: blur(4px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const DayIcon = styled.img.attrs((props) => ({src: props.src, alt: props.alt}))`
	height: auto;
`;
