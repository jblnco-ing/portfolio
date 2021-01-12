import React from "react";
import skills from "../../consts/skills";
// import "../../styles/Card.css";
const Skill = ({img,text}) => (
	<div className="skill-container p-2" style={{
		textAlign: 'center',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	}}>
		<div className="circle" style={{
			backgroundColor: '#000000',
			height: '80px',
			width: '80px',
			padding: '20px',
			borderRadius: '50%',
		}}>
			<img src={img} alt="skill" style={{
				width: '100%',
				height: '100%',
			}} />
		</div>
		<p>
			{text}
		</p>
	</div>
);
const listSkills = skills.map(({ img, text }) => <Skill text={text} img={img}/>);

export const Skills = () => {
	return (
		<div className="d-flex w-50 container flex-row justify-content-sm-around">
			{listSkills}
		</div>
	);
};
