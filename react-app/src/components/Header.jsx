import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import {
     Add as AddIcon,
     LightMode as LightModeIcon, 
     DarkMode as DarkModeIcon, 
     Menu as MenuIcon,
     ArrowBack as BackIcon,
} from "@mui/icons-material";
import { useApp } from "../AppProvider";
import { useLocation, useNavigate } from "react-router";

export default function Header() {
    const { showForm, setShowForm, mode, setMode, setShowDrawer } = useApp();
    const {pathname} = useLocation();
    const navigate = useNavigate();
    
    return (
        <AppBar position="static">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", alignItems: "center" , gap: 2 }}>
                    {
                        pathname == "/" ? (
                            <IconButton color="inherit" onClick={() => setShowDrawer(true)}>
                                <MenuIcon/>
                            </IconButton>
                        ) : (
                            <IconButton color="inherit" onClick={() => navigate("/")}>
                                <BackIcon/>
                            </IconButton>
                        )
                    }
                    <Typography>
                        App
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 1}}>
                    <IconButton onClick={() => setShowForm(!showForm)} color="inherit">
                        <AddIcon/>
                    </IconButton>

                    {
                        mode == "dark" ? (
                            <IconButton color="inherit" onClick={() => setMode("light")}>
                                <LightModeIcon/>
                            </IconButton>
                        ): (
                            <IconButton color="inherit" onClick={() => setMode("dark")}>
                                <DarkModeIcon/>
                             </IconButton>
                        )
                    }
                </Box>
            </Toolbar>
        </AppBar>
    )
}