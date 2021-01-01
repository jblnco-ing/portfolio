import React from "react";
import "../../styles/CardProject.css";

export const CardProject = (props) => {
	const { title, description, styles } = props;
	return (
		<div className="container-card-project">
			<div id="container-text-card-project">
				<h1 >{title}</h1>
				<h2 >{description}</h2>
			</div>
			<div id="container-img-card-project" style={styles}>
			</div>
		</div>
	);
};
