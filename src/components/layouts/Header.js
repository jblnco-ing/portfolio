import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/joel-inst.png';
import '../../styles/Header.css';
const Header = (props) => (
    <header>
        <div >
            <Link className="link" to="/portfolio">
                <img src={logo} alt="logo Jblnco.ing" />
                <h1>
                    Jblnco.ing
                </h1>
            </Link>
        </div>
    </header>
);

export default Header;