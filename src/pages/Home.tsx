import { useEffect, useState } from "react";
import AsideMenu from "../components/AsideMenu";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import './Home.css';
import proyectData from '../data/proyects.json';
import ProyectCard from "../components/ProyectCard";
import ProyectInterface from "../interfaces/Proyect";

const drawerWidth = 400;


export default function Home() {
    const [proyects, setProyects] = useState<ProyectInterface[]>([]);
    const [filteredProyects, setFilteredProyects] = useState<ProyectInterface[]>([]);

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

    return (
        <div>
            <AsideMenu onSelectSection={filterProyects}/>
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
                <Grid container>
                    {filteredProyects.map((proyect) => (
                        <ProyectCard proyect={proyect}/>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}