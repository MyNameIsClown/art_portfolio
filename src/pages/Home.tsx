import AsideMenu from "../components/AsideMenu";
import { Box, Toolbar } from "@mui/material";

export default function Home() {
    return (
        <div>
            <AsideMenu/>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 240px)` } }}
            >
                <Toolbar />
            </Box>
        </div>
    );
}