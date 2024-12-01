import { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from "./App";
import { CssBaseline } from '@mui/material';
import AppRouter from "./AppRouter";

const AppContext = createContext();

export function useApp() {
    return useContext(AppContext)
}

export default function AppProvider() {
    const [showForm, setShowForm] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);
    const [mode, setMode] = useState("dark");
    const [auth, setAuth] = useState(false);

    const theme = useMemo(() => {
        return createTheme({
            palette: {
              mode,
            },
          });
    }, [mode]);

    return (
        <AppContext.Provider value={{ showForm, setShowForm, mode, setMode, showDrawer, setShowDrawer, auth, setAuth }}>
            <ThemeProvider theme={theme}>
                <AppRouter/>
                <CssBaseline/>
            </ThemeProvider>
        </AppContext.Provider>
    )
}