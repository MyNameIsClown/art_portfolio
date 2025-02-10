import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import ProyectCard from "../components/ProyectCard";
import ProyectInterface from "../interfaces/Proyect";

interface ProyectsProps {
    proyects: ProyectInterface[];
}

export default function Proyects({proyects}: ProyectsProps) {
    const [filteredProyects, setFilteredProyects] = useState<ProyectInterface[]>([]);

    useEffect(() => {
        setFilteredProyects(proyects);
    })

    return (
        <Grid container>
            {filteredProyects.map((proyect:ProyectInterface) => (
                <ProyectCard proyect={proyect}/>
            ))}
        </Grid>
    );
}