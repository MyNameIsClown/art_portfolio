import { Link } from 'react-router-dom';
import "../assets/styles.css"

export default function Header() {
    return (
        <header className="header">
            <h1>Mi Portfolio</h1>
            <nav>
                <ul>
                    <li>Proyectos</li>
                    <li>Sobre mi</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </header>
    );
};