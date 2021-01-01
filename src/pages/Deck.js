import React, { Component } from 'react'
import { Card } from "../components/common/Card"
import Layout from '../components/layouts/Layout';
import projects from '../consts/projects';
import '../styles/Deck.css';

export default class Deck extends Component {
	render() {
		const projectsCards = projects.map((item, index) => (
		<Card
			key={index}
			title={item.title}
			description={item.description}
			src={item.src}
			point={item.point}
			styles={item.style}
			/>
		));
        return (
			<Layout>
            	<div id="deck-container" >
                	{projectsCards}
            	</div>
			</Layout>
        )
    }
}
