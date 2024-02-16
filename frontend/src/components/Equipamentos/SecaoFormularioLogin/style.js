import styled from 'styled-components';

export const Container = styled.div`
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 300px;
`;

export const Header = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	padding-top: 20px;
	padding-left: 20px;
`;

export const Button = styled.button`
	padding: 10px 20px;
	background-color: #00ffff;
	font-weight: bold;
	width: 100%;
	border-radius: 10px;

	&:hover {
		transition: 0.1s;
		background-color: #000941;
		color: #ffffff;
	}
`;

export const Eye = styled.div`
	padding-left: 10px;
`;

export const Register = styled.div`
	color: #000941;
	font-weight: bold;
	font-size: 1rem; /* Define o tamanho inicial da fonte */
	transition: font-weight 0.3s, font-size 0.3s; /* Adiciona uma transição suave para a mudança de peso e tamanho da fonte */

	&:hover {
		cursor: pointer;
		font-weight: 600; /* Altera o peso da fonte para dar destaque quando estiver em hover */
		font-size: 1.5rem; /* Aumenta o tamanho da fonte quando estiver em hover */
	}
`;

export const Field = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 5px;
	width: 100%;
`;
