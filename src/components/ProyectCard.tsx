import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ProyectInterface from "../interfaces/Proyect";
import CssBaseline from '@mui/material/CssBaseline';

interface ProyectCardProps {
    proyect: ProyectInterface;
}

export default function ProyectCard({proyect}: ProyectCardProps) {
    const handleNavigate = (proyect: ProyectInterface) => () => {
        window.location.href = `/proyect/${proyect.id}`;
    }
    return (
        <div>
            <CssBaseline/>
            <Card className="proyect-card" onClick={handleNavigate(proyect)}
                sx={{
                    minWidth: '300px',
                    height: '600px',
                    margin: '20px',
                    padding: '50px',
                    borderRadius: '70px',
                    ":hover": {
                        boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
                        transform: 'scale(1.01)',
                        transition: 'all 0.3s ease',
                    }
                  }}
            >
                <Typography variant="h1">{proyect.name}</Typography>
                <p>{proyect.description}</p>
                <img src={proyect.header_img} alt={proyect.name}/>
            </Card>
        </div>
    );
}