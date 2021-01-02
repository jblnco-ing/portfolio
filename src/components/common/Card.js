import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Card.css";

export const Card = (props) => {
	const { title, description, point, styles } = props;
	return (
		<div className="container-card">
			<Link
				to={{
					pathname: point,
				}}
			>
				<h1 className="title">{title}</h1>
				<h2 className="descript">{description}</h2>
				<div className="circle" style={styles}>
				</div>
			</Link>
		</div>
	);
};
