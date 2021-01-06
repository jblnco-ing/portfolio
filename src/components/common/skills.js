import React from "react";
import { navajas_svg } from "../../assets/img/skills";
// import "../../styles/Card.css";

export const skills = (props) => {
	return (
		<div className="skills-container">
			<div className="skill-container" style={{
				textAlign: 'center',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center'
			}}>
				<div className="circle" style={{
					backgroundColor: '#000000',
					height: '80px',
					width: '80px',
					padding: '10px',
					borderRadius: '50%',
				}}>
					<img src={navajas_svg} alt="skill" style={{
						height: '100%',
					}} />
				</div>
				<p>
					hola
						</p>
			</div>
		</div>
	);
};
