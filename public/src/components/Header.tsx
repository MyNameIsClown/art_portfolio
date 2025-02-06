import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Header() {
    return (
        <header className="header">
            <h1>Mi Portfolio</h1>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/proyectos">Proyectos</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    );
};