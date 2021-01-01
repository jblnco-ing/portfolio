import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import Layout from '../components/layouts/Layout';
// import Deck from './Deck';
import '../styles/Home.css';
export default class Home extends Component {
    render() {
        return (
            <div id="home-container">
                <div className="content">
                    <div className="avatar"></div>
                    <p>Hola, soy Joel.</p>
                    <p>Soy mecatrónico y desarrollador Full Stack, yo encuentro la manera de resolver los problemas.</p>
                    <p>Trabajo haciendo aplicaciones webs, moviles y harware para varios proyectos. ve más en mi <Link className="link" to="/portfolio">portafolio</Link>.</p>
                </div>
            </div>
        )
    }
}
