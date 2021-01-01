import React from "react";
import { Link } from "react-router-dom";
import "../../styles/CardStyles.css";

export const Card = (props) => {
	const { title, description, point, styles } = props;
	// styles.backgroundImage = `url(${src})`;
	return (
		<div className="container-card">
			<Link
				to={{
					pathname: point,
					state: {
						props
					}
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
