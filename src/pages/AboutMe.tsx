import { Margin } from '@mui/icons-material';
import './AboutMe.css';
import { Box, Typography } from "@mui/material";

export default function AboutMe() {
    return (
        <Box>
            <div className="header">
                <Typography variant="h1"
                    sx={{fontSize: '4rem', textAlign: 'center', }}
                >Irene Ayerbe Ruiz</Typography>
            </div>
        </Box>    
    );
}