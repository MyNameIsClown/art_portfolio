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
    useEffect(() => {
        setProyects(proyectData);
    }, []);

    return (
        <div>
            <AsideMenu/>
            <Box 
                className="home-container"
                sx={{
                    marginLeft: { sm: `${drawerWidth}px`, xs: 0 }, // Agregar margen cuando el aside está fijo
                    transition: 'margin 0.1s ease-in-out', // Suaviza la transición cuando cambia el tamaño
                    width: { sm: `calc(100% - ${drawerWidth}px)`, xs: '100%' }, // Ajustar el ancho dinámicamente
                  }}
                >
                <Grid container>
                    {proyects.filter(proyect => proyect.id <= 3).map((proyect) => (
                        <ProyectCard proyect={proyect}/>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}