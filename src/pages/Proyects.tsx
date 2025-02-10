import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import ProyectCard from "../components/ProyectCard";
import ProyectInterface from "../interfaces/Proyect";
import Grow from "@mui/material/Grow";

interface ProyectsProps {
    proyects: ProyectInterface[];
}

export default function Proyects({ proyects }: ProyectsProps) {
    const [filteredProyects, setFilteredProyects] = useState<ProyectInterface[]>([]);
    const [visibleProyects, setVisibleProyects] = useState<boolean[]>([]);

    useEffect(() => {
        setFilteredProyects(proyects);
        // Inicializa el estado de visibilidad para cada proyecto
        setVisibleProyects(proyects.map(() => false));
    }, [proyects]);

    useEffect(() => {
        // Función para mostrar los proyectos uno a uno
        const timer = setTimeout(() => {
            setVisibleProyects((prev) => {
                const newVisible = [...prev];
                const index = newVisible.findIndex((visible) => !visible);
                if (index !== -1) {
                    newVisible[index] = true;
                }
                return newVisible;
            });
        }, 200); // Retraso entre la aparición de cada proyecto (200 ms)

        return () => clearTimeout(timer); // Limpia el temporizador al desmontar
    }, [visibleProyects]);

    return (
        <Grid container spacing={1} columns={12} justifyContent="center">
            {proyects.length === 0 && <p>Todavia no hay proyectos en esta categoría</p>}
            {filteredProyects.map((proyect: ProyectInterface, index: number) => (
                <Grow in={visibleProyects[index]} key={proyect.id} timeout={500}>
                    <Grid size={{ xs: 12, sm: 12, md: proyect.size ?? "grow" }}>
                        <ProyectCard proyect={proyect} />
                    </Grid>
                </Grow>
            ))}
        </Grid>
    );
}