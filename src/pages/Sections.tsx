import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid2";
import sectionData from "../data/sections.json";
import SectionInterface from "../interfaces/Sections";

export default function Sections() {
    const [sections, setSections] = useState<SectionInterface[]>([]);

    useEffect(() => { 
        setSections(sectionData);
    }, []);

    return(
    <Grid container spacing={2}>
        {sections.map((proyect) => (
            <Grid size={12} key={proyect.id}>
                <h3>{proyect.title}</h3>
                <p>{proyect.url}</p>
            </Grid>
        ))}
    </Grid>
    );
}