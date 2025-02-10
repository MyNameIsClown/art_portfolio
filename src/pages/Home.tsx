import './Home.css';
import { useEffect, useState } from "react";

import AsideMenu from "../components/AsideMenu";
import proyectData from '../data/proyects.json';

import ProyectInterface from "../interfaces/Proyect";
import { Box } from "@mui/material";

import Proyects from "./Proyects";
import AboutMe from "./AboutMe";
import Contacts from "./Contacts";

const drawerWidth = 400;

export default function Home() {
    const [proyects, setProyects] = useState<ProyectInterface[]>([]);
    const [filteredProyects, setFilteredProyects] = useState<ProyectInterface[]>([]);
    const [activePanel, setActivePanel] = useState<'projects' | 'about' | 'contacts'>('projects');

    useEffect(() => {
        setProyects(proyectData);
    }, []);

    useEffect(() => {
        setFilteredProyects(proyects.filter(proyect => proyect.id <= 3));
    }, [proyects]);

    const filterProyects = (selectedSectionId : number) => {
        if(selectedSectionId == 0) {
            setFilteredProyects(proyects.filter(proyect => proyect.id <= 3));
            return;
        }
        setFilteredProyects(proyects.filter(proyect => proyect.section_id == selectedSectionId));
    }

    const renderPanel = () => {
        switch (activePanel) {
            case 'projects':
                return <Proyects proyects={filteredProyects} />;
            case 'about':
                return <AboutMe />;
            case 'contacts':
                return <Contacts />;
            default:
                return <Proyects proyects={filteredProyects} />;
        }
    }

    return (
        <div>
            <AsideMenu 
                onSelectSection={filterProyects}
                onNavigate={setActivePanel}
            />
            <Box
            className="home-container"
            sx={{
                marginLeft: { sm: `${drawerWidth}px`, xs: 0 }, // Agregar margen cuando el aside está fijo
                transition: 'margin 0.1s ease-in-out', // Suaviza la transición cuando cambia el tamaño
                width: { sm: `calc(100% - ${drawerWidth}px)`, xs: '100%' }, // Ajustar el ancho dinámicamente
                minHeight: '100vh', // Asegura que el contenedor cubra toda la altura de la pantalla
                backgroundColor: 'background.default', // Usa el color de fondo definido en el tema
                padding: '20px', // Añade un poco de padding para evitar que el contenido toque los bordes
                }}
            >
                {renderPanel()}
            </Box>
        </div>
    );
}